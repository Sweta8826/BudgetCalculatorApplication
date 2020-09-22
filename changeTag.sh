#!/bin/bash
sed "s/tagVersion/$1/g" pods.yml > budget-app-angular-pod.yml
