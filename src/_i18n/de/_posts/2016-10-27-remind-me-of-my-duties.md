---
layout: post
title:  Erinnere mich an meine Pflichten
description: description.duties
date:   2016-10-27 11:07:00
show_social: true
teaser: |
  Es ist gefühlt bereits eine Ewigkeit her, dass Felix und ich gemeinsam unsere Todo-Liste für das Terminal gebaut haben (tdo). Nun ist es an der Zeit, etwas Neues anzugehen...
tags: rust, tdo, libc 
---

Es ist gefühlt bereits eine Ewigkeit her, dass Felix und ich gemeinsam unsere Todo-Liste für das Terminal gebaut haben ([tdo](http://tdolist.de "Externer Link: Projektwebseite von tdolist"){:target="_blank"}). Nun ist es an der Zeit, etwas Neues anzugehen.  
Wir haben vor einer Weile begonnen, das ursprünglich auf Python basierende Projekt in Rust neu zu schreiben. Jedoch hatte ich in der Zwischenzeit keine Zeit, mich selbst weiter in dieser Sprache zu üben. Also versuche ich in verschiedenen kleineren Projekten weiter zu lernen. Ein Service, welcher in irgendeiner Art Benachrichtigungen sendet, wäre nicht schlecht. Ich hätte gerne Mails mit meinen noch zu erledigenden Aufgaben.

Diese Idee war der Beginn von [tdo-notify](https://github.com/tdolist/tdo-notify "Externer Link: tdo-notify Repository auf Github"){:target="_blank"}, einem Tool was via Cronjob ausgeführt einmal täglich eine Erinnerung schickt.  
Da Rust und Swift relativ ähnlich sind, war es für mich ein wenig schwierig, sich an den richtigen Syntax zu erinnern. Zudem machte mir der Borrow-Checker Schwierigkeiten.
Aber nach dem Durchforsten der Dokumentationen unterschiedlichster Crates habe ich eine Version herausgearbeitet, die funktioniert. Nichts persönliches mit drin, nur die reinen Aufgaben, kein schöner initialer Satz dazu.

Wie kommt man an den vollen Namen des aktuellen Benutzers? Denn es wäre eigentlich schön, wenn die Mail auch eine Begrüßung beinhalten würde.  
Man könnte ``finger `whoami` `` verwenden, um an die Informationen des Nutzers zu gelangen, jedoch möchte ich ungern einen extra Subprozess dafür spawnen.  
Es gibt einen weiteren Weg: die libc-Bibtiothek.

Es hat mich einiges an Zeit gekostet, ein zufriedenstellendes Resultat zu erhalten, doch letztendlich bin ich zu folgenden Ergebnis gekommen:

```rust
extern crate libc;
use std::{slice, io, ptr};

fn get_user_name() -> Result<String, io::Error> {
    unsafe {
        let uid = libc::geteuid();
        let user = ptr::read(libc::getpwuid(uid));
        let name = String::from_utf8_unchecked(slice::from_raw_parts(user.pw_gecos as *const u8,
                                                           libc::strlen(user.pw_gecos) as usize)
                .to_vec());
        if name == "" {
            Err(io::Error::last_os_error())
        } else {
            Ok(name)
        }
    }
}
```
