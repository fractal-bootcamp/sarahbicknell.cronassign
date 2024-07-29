#!/bin/bash

# Update the system
sudo yum update -y

# Install Node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Install crontab
sudo yum install -y cronie

# Start cron should already be installed on ec2
sudo systemctl start crond
sudo systemctl enable crond

# Print installed versions
echo "Node.js version:"
node --version
echo "Bun version:"
bun --version
echo "Crontab version:"
crontab -V
