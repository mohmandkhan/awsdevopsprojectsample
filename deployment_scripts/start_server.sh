#!/bin/bash
cd /home/ubuntu/awsdevopsprojectsample
su ubuntu -c "PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.19.1/bin pm2 restart app.js"