package docker

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	exec2 "github.com/alexellis/go-execute/pkg/v1"
	"github.com/containerd/containerd/log"
	commonIL "github.com/intertwin-eu/interlink/pkg/common"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
)

var Clientset *kubernetes.Clientset
var Ctx context.Context

func prepare_mounts(container v1.Container, pod *v1.Pod) string {
	log.G(Ctx).Info("- Preparing mountpoints for " + container.Name)
	mount_data := ""
	pod_name := strings.Split(container.Name, "-")

	if len(pod_name) > 6 {
		pod_name = pod_name[0:6]
	}

	err := os.MkdirAll(commonIL.InterLinkConfigInst.DataRootFolder+strings.Join(pod_name[:len(pod_name)-1], "-"), os.ModePerm)
	if err != nil {
		log.G(Ctx).Error("Can't create directory " + commonIL.InterLinkConfigInst.DataRootFolder + strings.Join(pod_name[:len(pod_name)-1], "-"))
	} else {
		log.G(Ctx).Debug("- Created directory " + commonIL.InterLinkConfigInst.DataRootFolder + strings.Join(pod_name[:len(pod_name)-1], "-"))
	}

	for _, mount_var := range container.VolumeMounts {
		log.G(Ctx).Debug("- Processing mountpoint " + mount_var.Name)

		var podVolumeSpec *v1.VolumeSource
		path := ""
		fmt.Print(path)

		for _, vol := range pod.Spec.Volumes {

			if vol.Name == mount_var.Name {
				podVolumeSpec = &vol.VolumeSource
			}

			if podVolumeSpec != nil && podVolumeSpec.ConfigMap != nil {
				configMapsPaths := mountConfigMaps(container, pod)
				for _, path := range configMapsPaths {
					mount_data += "-v " + path
				}

			} else if podVolumeSpec != nil && podVolumeSpec.Secret != nil {
				secretsPaths := mountSecrets(container, pod)
				for _, path := range secretsPaths {
					mount_data += "-v " + path
				}
			} else if podVolumeSpec != nil && podVolumeSpec.EmptyDir != nil {
				path := mountEmptyDir(container, pod)
				mount_data += "-v " + path

			} else {
				/* path = filepath.Join(commonIL.InterLinkConfigInst.DataRootFolder, pod.Namespace+"-"+string(pod.UID)+"/", mount_var.Name)
				path = (".knoc/" + strings.Join(pod_name, "-") + "/" + mount_var.Name + ":" + mount_var.MountPath + ",")
				mount_data += path */
				log.G(Ctx).Info("\n*******************\n*To be implemented*\n*******************")
			}
		}
	}
	if last := len(mount_data) - 1; last >= 0 && mount_data[last] == ',' {
		mount_data = mount_data[:last]
	}
	return mount_data
}

func mountConfigMaps(container v1.Container, pod *v1.Pod) []string { //returns an array containing mount paths for configMaps
	configMaps := make(map[string]string)
	var configMapNamePaths []string

	if commonIL.InterLinkConfigInst.ExportPodData {
		cmd := []string{"-rf " + commonIL.InterLinkConfigInst.DataRootFolder + "configMaps"}
		shell := exec2.ExecTask{
			Command: "rm",
			Args:    cmd,
			Shell:   true,
		}

		_, err := shell.Execute()

		if err != nil {
			log.G(Ctx).Error("Unable to delete root folder")
		}

		for _, mountSpec := range container.VolumeMounts {
			var podVolumeSpec *v1.VolumeSource

			for _, vol := range pod.Spec.Volumes {
				if vol.Name == mountSpec.Name {
					podVolumeSpec = &vol.VolumeSource
				}
				if podVolumeSpec != nil && podVolumeSpec.ConfigMap != nil {
					log.G(Ctx).Info("-- Retrieving ConfigMap " + podVolumeSpec.ConfigMap.Name)
					cmvs := podVolumeSpec.ConfigMap
					mode := os.FileMode(*podVolumeSpec.ConfigMap.DefaultMode)
					podConfigMapDir := filepath.Join(commonIL.InterLinkConfigInst.DataRootFolder, pod.Namespace+"-"+string(pod.UID)+"/", "configMaps/", vol.Name)

					configMap, err := Clientset.CoreV1().ConfigMaps(pod.Namespace).Get(cmvs.Name, metav1.GetOptions{})

					if err != nil {
						log.G(Ctx).Error(err)
					}

					if configMap.Data != nil {
						for key := range configMap.Data {
							configMaps[key] = configMap.Data[key]
							path := filepath.Join(podConfigMapDir, key)
							path += (":" + mountSpec.MountPath + "/" + key + " ")
							configMapNamePaths = append(configMapNamePaths, path)
						}
					}

					if configMaps == nil {
						continue
					}

					cmd = []string{"-p " + podConfigMapDir}
					shell = exec2.ExecTask{
						Command: "mkdir",
						Args:    cmd,
						Shell:   true,
					}

					execReturn, _ := shell.Execute()
					if execReturn.Stderr != "" {
						log.G(Ctx).Error(err)
					} else {
						log.G(Ctx).Debug("--- Created folder " + podConfigMapDir)
					}

					log.G(Ctx).Debug("--- Writing ConfigMaps files")
					for k, v := range configMaps {
						// TODO: Ensure that these files are deleted in failure cases
						fullPath := filepath.Join(podConfigMapDir, k)
						os.WriteFile(fullPath, []byte(v), mode)
						if err != nil {
							log.G(Ctx).Errorf("Could not write ConfigMap file %s", fullPath)
							os.Remove(fullPath)
						} else {
							log.G(Ctx).Debug("--- Written ConfigMap file " + fullPath)
						}
					}

				}
			}
		}
	}
	return configMapNamePaths
}

func mountSecrets(container v1.Container, pod *v1.Pod) []string { //returns an array containing mount paths for secrets
	secrets := make(map[string][]byte)
	var secretNamePaths []string

	if commonIL.InterLinkConfigInst.ExportPodData {
		cmd := []string{"-rf " + commonIL.InterLinkConfigInst.DataRootFolder + "secrets"}
		shell := exec2.ExecTask{
			Command: "rm",
			Args:    cmd,
			Shell:   true,
		}

		_, err := shell.Execute()

		if err != nil {
			log.G(Ctx).Error("Unable to delete root folder")
		}

		for _, mountSpec := range container.VolumeMounts {
			var podVolumeSpec *v1.VolumeSource

			for _, vol := range pod.Spec.Volumes {
				if vol.Name == mountSpec.Name {
					podVolumeSpec = &vol.VolumeSource
				}
				if podVolumeSpec != nil && podVolumeSpec.Secret != nil {
					log.G(Ctx).Info("-- Retrieving Secret " + podVolumeSpec.Secret.SecretName)
					svs := podVolumeSpec.Secret
					mode := os.FileMode(*podVolumeSpec.Secret.DefaultMode)
					podSecretDir := filepath.Join(commonIL.InterLinkConfigInst.DataRootFolder, pod.Namespace+"-"+string(pod.UID)+"/", "secrets/", vol.Name)

					secret, err := Clientset.CoreV1().Secrets(pod.Namespace).Get(svs.SecretName, metav1.GetOptions{})

					if err != nil {
						log.G(Ctx).Error(err)
					}

					if secret.Data != nil {
						for key := range secret.Data {
							secrets[key] = secret.Data[key]
							path := filepath.Join(podSecretDir, key)
							path += (":" + mountSpec.MountPath + "/" + key + " ")
							secretNamePaths = append(secretNamePaths, path)
						}
					}

					if secrets == nil {
						continue
					}

					cmd = []string{"-p " + podSecretDir}
					shell = exec2.ExecTask{
						Command: "mkdir",
						Args:    cmd,
						Shell:   true,
					}

					execReturn, _ := shell.Execute()
					if strings.Compare(execReturn.Stdout, "") != 0 {
						log.G(Ctx).Error(err)
					}
					if execReturn.Stderr != "" {
						log.G(Ctx).Error(err)
					} else {
						log.G(Ctx).Debug("--- Created folder " + podSecretDir)
					}

					log.G(Ctx).Debug("--- Writing Secret files")
					for k, v := range secrets {
						// TODO: Ensure that these files are deleted in failure cases
						fullPath := filepath.Join(podSecretDir, k)
						os.WriteFile(fullPath, v, mode)
						if err != nil {
							log.G(Ctx).Errorf("Could not write Secret file %s", fullPath)
							os.Remove(fullPath)
						} else {
							log.G(Ctx).Debug("--- Written ConfigMap file " + fullPath)
						}
					}
				}
			}
		}
	}
	return secretNamePaths
}

func mountEmptyDir(container v1.Container, pod *v1.Pod) string {
	var edPath string

	if commonIL.InterLinkConfigInst.ExportPodData {
		cmd := []string{"-rf " + commonIL.InterLinkConfigInst.DataRootFolder + "emptyDirs"}
		shell := exec2.ExecTask{
			Command: "rm",
			Args:    cmd,
			Shell:   true,
		}

		_, err := shell.Execute()

		if err != nil {
			log.G(Ctx).Error("Unable to delete root folder")
		}

		for _, mountSpec := range container.VolumeMounts {
			var podVolumeSpec *v1.VolumeSource

			for _, vol := range pod.Spec.Volumes {
				if vol.Name == mountSpec.Name {
					podVolumeSpec = &vol.VolumeSource
				}
				if podVolumeSpec != nil && podVolumeSpec.EmptyDir != nil {
					// pod-global directory
					edPath = filepath.Join(commonIL.InterLinkConfigInst.DataRootFolder, pod.Namespace+"-"+string(pod.UID)+"/"+"emptyDirs/"+vol.Name)
					log.G(Ctx).Info("-- Creating EmptyDir in " + edPath)
					// mounted for every container
					cmd := []string{"-p " + edPath}
					shell := exec2.ExecTask{
						Command: "mkdir",
						Args:    cmd,
						Shell:   true,
					}

					_, err := shell.Execute()
					if err != nil {
						log.G(Ctx).Error(err)
					} else {
						log.G(Ctx).Debug("-- Created EmptyDir in " + edPath)
					}

					edPath += (":" + mountSpec.MountPath + "/" + mountSpec.Name + " ")
				}
			}
		}
	}
	return edPath
}