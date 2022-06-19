---
layout: post
title:  Remind me of my duties
description: description.duties
date:   2016-10-27 11:07:00
show_social: true
teaser: |
  It felt like a long time ago when Felix and I built the terminal todo list tdo. But now there was time to build something new...
tags: rust, tdo, libc 
---

It felt like a long time ago when Felix and I built the terminal todo list [tdo](http://tdolist.de "External Link: Projekt webseite of tdolist"){:target="_blank"}. But now there was time to build something new.  
We started to rewrite this original Python based project in Rust a while ago, but in between I had no time to practice this language at all. So I tried to teach myself again on a different project. A notification service should be good. I want to get a mail with all my tasks.

This idea was the beginning of [tdo-notify](https://github.com/tdolist/tdo-notify "External Link: tdo-notify repository on Github"){:target="_blank"} a tool that can be run in a cronjob to remind you every day.
Because of the similarity between Rust and Swift it was a bit tricky to remember the correct syntax and I had some problems with the borrow checker.
All in all after reading tons of documentation of the different crates I came up with a version that worked. But there was nothing personal in it. Just the tasks, no initial sentence.

How do you get the full name of the current user? It would be nice, if you have a greeting in that mail.  
Well, you could use ``finger `whoami` `` to get the user information. The only thing is, that I don't want to spawn a subprocess.  
There is another method: using libc.  

It took me hours to get a satisfying result and I ended up with the following piece of code:

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
