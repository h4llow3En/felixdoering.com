---
layout: post
title:  "Alles neu"
date:   2016-04-14 10:54:40+01:00
teaser: |
  Ich wollte ein seriöseres Design haben. Das Alte war nur das Standard-Jekyll-Theme mit einigen kleinen Änderungen. Es sah einfach unfertig aus...
tags: rebrush, telegram bot, tdo, todo list 
---
## Alles sieht so neu aus

Zumindest fast. Ich bin immer noch derselbe, aber meine Seite hat ein neues Design bekommen und ich habe beschlossen, meine Beiträge auf Englisch zu verfassen.  

Und warum?
Dafür gibt es mehrere Gründe. Zunächst einmal wollte ich ein seriöseres Design haben. Das Alte war nur das Standard-Jekyll-Theme mit einigen kleinen Änderungen.
Es sah einfach unfertig aus. Die Farben passten nicht zusammen und alles in allem gab es keinen persönlichen Stil.  
Und warum auf Englisch?  
Ich schreibe meine Anwendungen (fast immer) auf Englisch, und ich denke, es sieht viel sauberer aus, wenn ich alles in der gleichen Sprache mache. Vielleicht werde ich meine alten Beiträge übersetzen, aber ich bin mir noch nicht sicher. Ich habe angefangen und versucht, die ersten zu übersetzen, aber dann dachte ich, dass es kein Problem sein könnte, die Anfänge meines Blogs zu sehen. Und nun auf zum zweiten Versuch.

Das ist so ziemlich alles zu meiner neuen Seite. Ich werde sie weiterhin Stück für Stück verbessern. Zum Beispiel ist die 'Über mich' Seite noch leer. Das muss sich bald ändern.  
Aber ich möchte auch ein wenig über meine aktuellen Projekte schreiben, nicht nur über die Neugestaltung von felixdoering.com:

## Ich rede mit dir

Wem der Messenger Telegram bekannt ost, weiß sicherlich auch in diesem auch Bots verwendet werden können. [Felix](https://dummyco.de) und ich haben den IAmTalkingToYou-Bot geschrieben. Aber was macht er? Sobald eine Person erwähnt wird, registriert der Bot dies und erwähnt sie ebenfalls noch einmal.  
Eine neue, gestern implementierte Funktion ist das '+1'-Feature. Schreibt dies jemand, antwortet der Bot darauf mit '\<Benutzername des Absenders\> gefällt das.' oder im Falle von '-1' '\<Benutzername des Absenders\> gefällt das nicht.' Ja, aktuell antwortet dieser Bot auf Deutsch, aber hoffentlich werden wir irgendwann auch eine englische Version anbieten.  
Beim Testen der neuen Funktion hat Felix ein '+2' geschrieben.  
Warum kann einem etwas nicht mehr als einmal gefallen? Ich habe die Funktion erweitern und von nun an kann man '+\<x\>' schreiben und bekommt diese Antwort: '\<Benutzername des Absenders\> gefällt das \<x\>-fach.'

## tdo - Die TODO-Liste für das Terminal

Es gibt ein weiteres, etwas größeres Projekt, an dem Felix und ich gearbeitet haben. Es heißt 'tdo'. Felix wollte ein einfaches Werkzeug für die Kommandozeile, um TODOs zu verwalten und wir haben beschlossen es selbst zu schreiben. Aktuell haben wir viele Funktionalitäten implementiert und ein Release auf [pypi] (https://pypi.python.org/pypi/tdo) veröffentlicht. Das Tool war fertig. Ja, es **war**...

Während meiner Tätigkeit als Tutor an meiner Universität, zeigte ich dieses Tool einem Co-Tutoren und er fragte, ob er eine Benachrichtigung erhalten würde, wenn ein TODO schon lange offen ist. Das brachte Felix und mich auf die Idee, es weiter zu verbessen. Wir Pläne für ein neues Projekt gemacht: _tdo-server_

Nach Fertigstellung soll dies eine Online-Version des Kommandozeilen-Tools mit Synchronisierungsfunktionen sein. Aber es befindet sich noch in einem sehr frühen Entwicklungsstadium und wir haben noch nicht ganz entschieden, ob wir wirklich Python als Sprache unserer Wahl verwenden wollen oder ob wir etwas Neues ausprobieren, z.B. Rust.
