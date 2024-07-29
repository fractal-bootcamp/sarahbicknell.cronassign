#!/bin/bash

# variables 
EC2_USER="ec2-user"
EC2_HOST="ec2-3-138-170-160.us-east-2.compute.amazonaws.com:~"
KEY_PATH="/Users/sarelbic/Downloads/cakey.pem"
REMOTE_DIR="/home/ec2-user/emailproj"

# copy over updated files
scp -i $KEY_PATH emailtask.js $EC2_USER@$EC2_HOST:$REMOTE_DIR/
scp -i $KEY_PATH .env $EC2_USER@$EC2_HOST:$REMOTE_DIR/

# udate dependencies if needed
ssh -i $KEY_PATH $EC2_USER@$EC2_HOST "cd $REMOTE_DIR && npm install"

# edit here to update cron job, deleting old one
NEW_CRON="*/5 * * * * ~/.nvm/versions/node/v22.5.1/bin/node $REMOTE_DIR/emailtask.js >> $REMOTE_DIR/cron.log 2>&1"
ssh -i $KEY_PATH $EC2_USER@$EC2_HOST "crontab -r; echo \"$NEW_CRON\" | crontab -"

echo "update complete!"