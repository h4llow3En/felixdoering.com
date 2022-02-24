---
layout: post
title:  Bring me a time machine
description: description.timemachine
date:   2018-01-22 17:45:00+01:00
show_social: true
teaser: |
  I really like the idea of Apples TimeMachine backups. Plug in an external storage or even use some of your internal storage. The more convenient...
tags: timemachine, apple, backup, tutorial, ubuntu, macos
---

I really like the idea of Apples TimeMachine backups. Plug in an external storage or even use some of your internal storage.  
The more convenient way is to create backups with a TimeCapsule or a TimeMachine network volume. When connected to your WiFi every hour a new backup is made.
But what if you already have a good router and a local server and want to perform backups on it?

The solution: Configuring your server to emulate a TimeMachine network volume and macOS to accept an unofficial source. In my case the server runs on Ubuntu 17.04.  
The communication runs via Netatalk. Unfortunately, the version provided by the latest version of Debian or Ubuntu is not compatible anymore so you have to build a newer version from source.

*Notice:* This article is mostly a tutorial for myself in case I have to use it again. But the last post was nearly one and a half years ago, so I decided to publish this as well.

## Preparing the build

First install the needed build dependencies:

```bash
sudo apt install build-essential devscripts debhelper      \
                 cdbs autotools-dev dh-buildinfo libdb-dev \
                 libwrap0-dev libpam0g-dev libcups2-dev    \
                 libkrb5-dev libltdl3-dev libgcrypt11-dev  \
                 libcrack2-dev libavahi-client-dev         \
                 libldap2-dev libacl1-dev libevent-dev     \
                 d-shlibs dh-systemd
```

## Build from source

Clone the Repository of the updated Netatalk version:

```bash
git clone https://github.com/adiknoth/netatalk-debian
```

Change into the source directory and build it with

 ```bash
 debuild -b -uc -us
 ```

## Install Netatalk and Avahi Daemon

The `debuild` command builds the packages and places them one directory above.
Only two of the three packages are needed. Install them with

```bash
sudo dpkg -i libatalk18-dev_3.1.10-1_amd64.deb
sudo dpkg -i netatalk_3.1.10-1_amd64.deb
```

To be able to communicate with TimeMachine the Avahi Daemon is needed.

```bash
sudo apt install avahi-daemon libc6-dev libnss-mdns
```

## Configuration

Prepare a directory to store the backups in, e.g. `/Backup/TimeMachine` and chown it to the user who will be used to authenticate.

Some changes have to be made in `/etc/netatalk/afp.conf`.  
To mimic a TimeCapsule add to the [GLOBAL] Section at the top

```conf
mimicmodel = TimeCapsule6,106
```

The configuration of the "TimeCapsule" itself has to be added as well:

```conf
[TimeCapsule]
; should it be used as a time machine?
time machine = yes
; path to the backup folder
path = /Backup/TimeMachine
; Size in Megabyte
vol size limit = 1000000
; which users are allowed to access
; use the user who ownes the directory
valid users = timemachine
```

## Starting services and configure macOS to look for them

The last few things that have to be configured on the server is to start the services by default.

Now for the last few steps required on the server. Starting the services and enable them to automatically startup on system reboot:

```bash
sudo systemctl enable netatalk.service
sudo systemctl start netatalk.service
sudo systemctl enable avahi-daemon.service
sudo systemctl start avahi-daemon.service
```

The emulated TimeCapsule is now up and running. Time to configure macOS.  
Only one command is needed to allow unofficial Apple devices to be discovered as a TimeMachine network volume.

```bash
defaults write com.apple.systempreferences TMShowUnsupportedNetworkVolumes 1
```

The Server should be shown now in TimeMachine preferences now.

**UPDATE:** This article is out of date.
