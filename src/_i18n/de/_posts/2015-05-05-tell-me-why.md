---
layout: post
title: Bitte sag mir warum
date: 2015-05-05 12:03:00
description: description.tell_me_why
show_social: true
teaser: |
  Ein neuer Tag, eine neue Aufgabe. Das dachte ich jedenfalls. Wie in meinem Eintrag zuvor schon beschrieben, habe ich in mein Traffic-Plugin eine Updatefunktion eingebaut. Nur ist es ziemlich umständlich...
---
Ein neuer Tag, eine neue Aufgabe. Das dachte ich jedenfalls. Wie in meinem Eintrag zuvor schon beschrieben, habe ich in mein Traffic-Plugin eine Updatefunktion eingebaut. Nur ist es ziemlich umständlich, neue Updates zu veröffentlichen.

1. Builden
2. Den Build zippen (um die beiden wird man so oder so nicht drumherum kommen)
3. Die Zip-Datei signieren
4. Einen Release auf Github erstellen und die Zip als Binaries anhängen
5. (zu mindest bei mir) in den gh-pages Brach wechseln
6. In die appcast.xml (die enthält die Updateinformationen) folgendes aktualisieren:
  - Name des neuen Releases
  - Versionsnummer
  - Beschreibung
  - Link zur Zip
  - den DSA-Key, den man durch das signieren bekommen hat, eintragen
7. Den Branch pushen und hoffen, dass es funktionert.

Aus diesem Grund bin ich auf der Suche gewesen, dass ich das vielleicht irgendwie ein wenig automatisieren kann. Ich meine, es wäre nicht schwer, wenn man die Informationen aus 6. hat, diese mithilfe eines kleinen Scripts einfach einzufügen. Das Unangenehme an der Sache ist nur, dass man die Schritte davor alle manuell machen müsste, damit man alle Informationen dafür hat.
Schön, dass es Github gibt! Denn man findet immer irgendwie Leute, die aus dem gleichen Problem heraus schon etwas dafür gebastelt haben.
Vielleicht jetzt nicht direkt das gleiche Problem, aber es hilft trotzdem schon allgemein!
[__github-release__](https://github.com/aktau/github-release) von aktau ist ein Tool, welches via Kommandozeile Releases für Github erstellen kann und auch Binaries mit anfügen kann. Dadurch müsste es ziemlich einfach möglich sein, nun doch alles in ein etwas größeres Script zu schreiben.

Das Signieren der Zip-Datei ist auch nur ein Befehl, welcher als `$1` die Zip und als `$2` den Private-Key zum verschlüsseln entgegennimmt.
```
openssl dgst -sha1 -binary < "$1" | $openssl dgst -dss1 -sign "$2" | $openssl enc -base64
```
Da könnte man den String, der zurückgegeben wird, ganz einfach zwischenspeichern und man hat die nächste Information. Den (erst nach dem Release) existierenden Link kann man "raten", da er immer das Format https://github.com/\<Nutzername\>/\<Repo\>/releases/download/\<Versions-Tag\>/\<Datei\> hat.
So wie es aussieht, werde ich mich also mal daran setzen, das über diese Methode zu machen.

Jetzt aber noch mal kurz zu meinem doch etwas seltsamen Titel dieses Posts:
Ich habe versucht, dass Ganze irgendwie mit Hilfe eines Webhooks von Github zu machen, bin jedoch schon an der Konfiguration des Apache-Servers auf meinem Server gescheitert. Es wäre echt schön, wenn auch in der Dokumentation von apache2 irgendwo stehen würde, dass man seit der Version 2.4 das CGI-Modul manuell noch mal via `a2enmod cgi` aktivieren muss, bis sich da überhaupt etwas tut.
Es ist wirklich schön, wenn eine ausführliche Dokumentation vorhanden ist, aber dann sollte sie doch bitte auch auf dem aktuellsten Stand sein.
