# Deploy the application binary into a lean image
#FROM ubuntu:latest AS build-release-stage
FROM htcondor/mini:9.0.17-el7

ENV INTERLINKCONFIGPATH=/root/InterLinkConfig.yaml

RUN yum update -y && \
    yum install -y epel-release && \
    yum update -y && \
    yum install -y apptainer

RUN mkdir -p /cvmfs/grid.cern.ch/etc/grid-security

RUN pip3 install pyyaml

WORKDIR /utils

CMD ["/bin/sh", "-c", "/start.sh & python3 handles.py"]
