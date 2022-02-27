---
layout: post
title:  Man bringe mir eine Zeitmaschine
description: description.timemachine
date:   2018-01-22 17:45:00
last_modified_at: 2022-02-14 16:00:00
show_social: true
teaser: |
  Mir gefällt die Idee von Apples TimeMachine-Backups sehr gut. Man schließt ein externes Speichermedium an oder verwenden einen Teil des internen Speichers. Ein bequemerer Weg...
tags: timemachine, apple, backup, tutorial, ubuntu, macos
---

Mir gefällt die Idee von Apples TimeMachine-Backups sehr gut. Man schließt ein externes Speichermedium an oder verwenden einen Teil des internen Speichers.  
Ein bequemerer Weg ist die Erstellung von Backups mit einer TimeCapsule oder einem TimeMachine-Netzwerklaufwerk. Sobald man mit dem heimischen WiFi verbunden ist, wird jede Stunde ein neues Backup erstellt.
Was aber, wenn bereits einen guten Router und ein lokaler Server vorhanden ist und darauf die Backups erstellt werden sollen?

Die Lösung: Den Server so zu konfigurieren, dass er ein TimeMachine-Netzwerklaufwerk emuliert und macOS inoffizielle Geräte akzeptieren lassen. In meinem Fall läuft der Server auf Ubuntu 17.04.  
Die Kommunikation erfolgt via Netatalk. Leider ist die neueste Version, die von Debian oder Ubuntu bereitgestellt wird, zu alt und nicht mehr kompatibel, sodass die Software selbst aus dem Sourcecode gebaut werden muss.

*Hinweis:* Dieser Blog-Artikel dient hauptsächlich als Tutorial für mich selbst für den Fall, dass ich es noch einmal benötige. Da mein letzter Post jedoch über ein-einhalb Jahre her ist, habe ich mich entschieden, diesen hier zu veröffentlichen.

## Vorbereitung des Builds

Zuerst müssen alle nötigen Build-Dependencies installiert werden:

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

Klonen des Repositorys der geupdateten Netatalk-Version:

```bash
git clone https://github.com/adiknoth/netatalk-debian
```

Anschließender Wechsel in das Verzeichnis und Ausführen des Build-Behehls:

 ```bash
 debuild -b -uc -us
 ```

## Installieren von Netatalk und dem Avahi Daemon

Der `debuild`-Befehl erstellt die Installationspakete und legt sie im darüber liegenden Verzeichnis ab.
Es werden jedoch lediglich zwei der drei Pakete benötig. Sie können wie folgt installiert werden.

```bash
sudo dpkg -i libatalk18-dev_3.1.10-1_amd64.deb
sudo dpkg -i netatalk_3.1.10-1_amd64.deb
```

Um eine Kommunikation mit der TimeMachine-Software zu ermöglichen, wird zusätzlich der Avahi Daemon benötigt.

```bash
sudo apt install avahi-daemon libc6-dev libnss-mdns
```

## Konfiguration

Es muss ein Ordner angelegt werden, in dem später die Backups abgelegt werden, zum Beispiel `/Backup/TimeMachine`. Dieser muss zusätzlich dem Nutzer, welcher dann genutzt wird, um sich am Server zu authentifizieren, mittels `chown` zugewiesen werden.

Auch gilt es einige Änderungen an der `/etc/netatalk/afp.conf` vorzunehmen.  
Um eine TimeCapsule zu emulieren, muss die folgende Zeile in der Sektion [GLOBAL] hinzugefügt werden.

```conf
mimicmodel = TimeCapsule6,106
```

Anschießend die Konfiguration der "TimeCapsule" selbst an das Ende:

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

## Starten der Services und Konfiguration von macOS

Zu guter Letzt müssen die Services gestartet und dem Server mitgeteilt werden, dass sie nach einem Neustart des Systems automatisch mitstarten.

```bash
sudo systemctl enable netatalk.service
sudo systemctl start netatalk.service
sudo systemctl enable avahi-daemon.service
sudo systemctl start avahi-daemon.service
```

Serverseitig läuft nun die emulierte TimeCapsule und ist bereit, Backups anzunehmen. Zeit macOS zu konfigurieren.  
Damit TimeMachine das Netzlaufwerk akzeptiert und überhaupt finden kann, müssen inoffizielle Apple-Geräte mittels Kommandozeilenbefehl aktiviert werden.

```bash
defaults write com.apple.systempreferences TMShowUnsupportedNetworkVolumes 1
```

Nun sollte der Server in den TimeMachine-Einstellungen als Backup-Möglichkeit angezeit werden.

**UPDATE:** Dieser Artikel ist nicht mehr aktuell!
