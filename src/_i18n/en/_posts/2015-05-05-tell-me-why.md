---
layout: post
title: Bitte sag mir warum
date: 2015-05-05 12:03:00
description: description.tell_me_why
show_social: true
teaser: |
  A new day, a new task. Or so I thought. As described in my previous entry, I have built an update function into my traffic plugin. But it is quite difficult...
---
A new day, a new task. Or so I thought. As described in my previous entry, I have built an update function into my traffic plugin. But it is quite difficult to publish new updates.

1. Build
2. Zip the build (there is no getting around these two steps)
3. Sign the zip
4. Create a release on Github and attach the zip as binaries
5. (at least for me) change into the gh-pages branch
6. Update the following in the appcast.xml:
  - Name of the new release
  - Version numvber
  - Description
  - Link to the zip file
  - set the DSA-Key (you get it from signing the zip)
7. Push the branch and cross your fingers that everything works

That's why I've been looking for a way to automate this a little bit. I mean, it wouldn't be difficult, if you have the information from step 6 to just insert it with the help of a little script. The unpleasant thing is that you would have to do all the steps before that manually so that you have all the information for it.
It's nice that Github exists! Because somehow you always find people who have already built something for it out of the same problem.
Maybe not directly the same problem now, but it helps in general anyway!
[__github-release__](https://github.com/aktau/github-release) by aktau is a tool that can create releases for Github via the command line and can also attach binaries. This should make it fairly easy to write everything in a somewhat larger script.

The signing of the zip file is also only a command, which receives the zip as `$1` and the private key for encryption as `$2`.
```
openssl dgst -sha1 -binary < "$1" | $openssl dgst -dss1 -sign "$2" | $openssl enc -base64
```
You could simply cache the string that is returned and you have the next piece of information. The link that exists (only after the release) can be "guessed" because it always has the format https://github.com/\<username\>/\<repo\>/releases/download/\<version tag\>/\<file\>.
So it looks like I'll set about doing it via this method.

But now let's take a quick look at the rather strange title of this post:
I tried to do the whole thing somehow with the help of a webhook from Github, but failed already with the configuration of the Apache webserver on my server. It would be really nice if the documentation of apache2 would state somewhere that since version 2.4 you have to activate the CGI module manually via `a2enmod cgi` until anything happens.
It is really nice to have detailed documentation, but then it should also be up to date.
