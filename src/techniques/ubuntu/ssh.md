---
title: ssh service
index: true
icon: circle-dot
author: Haiyue
category:
  - linux
tag:
  - ubuntu
  - ssh
---


## How to install SSH server in Ubuntu
The procedure to install a ssh server in Ubuntu Linux is as follows:

``` bash
# install the openssh server
sudo apt-get install openssh-server

# Enable the ssh service by typing:
sudo systemctl enable ssh

# Enable and start the ssh service immediately
sudo systemctl enable ssh --now

# Start the ssh service by typing:
sudo systemctl start ssh

# Test it by login into the system using:
ssh userName@Your-server-name-IP

ssh user@ip

# Verify that ssh service running
sudo systemctl status ssh
```
## How to enable ssh authentication
https://www.ibm.com/docs/en/sia?topic=kbaula-enabling-rsa-key-based-authentication-unix-linux-operating-systems-3

## References
01. [Ubuntu Linux install OpenSSH server](https://www.cyberciti.biz/faq/ubuntu-linux-install-openssh-server/)