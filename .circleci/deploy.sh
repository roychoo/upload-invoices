#!/bin/bash

ssh ubuntu@ec2-52-221-212-204.ap-southeast-1.compute.amazonaws.com
cd upload-invoices
git pull origin master
yarn
yarn build
