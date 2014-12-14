---
layout: article
title: "Cyrillic app name incorrectly encoded during porting Android app to Blackberry"
author: "Vitaliy Zasadnyy"
description: ""
date: 2013-01-27T23:16:46+02:00
estimate: "4 mins"
categories: [blackberry, bug]
post: true
theme_color: "#21e034"
image: ""
---

Hi all, today I'll describe bug in latest version of `apk2bar` (version 1.5.0) tool provided by Blackberry for converting Android apk apps to bar.

I had small problem with displaying cyrillic app name on PlayBook and BB10 simulator. App names was incorrectly encoded from russian after converting using apk2bar tool. Problem appeared after updating bb eclipse plugin from version 1.3 to 1.5, with plugin v.1.3 it worked just ok (the same issue was with command line tools).

![image]({{site.baseurl}}/img/vitaliy/posts/app-name-incorrectly-encoded/blackberry-10-screenshot.png)

When I got problems with encodding with bb eclipse plugin, I decided to do the same thing with comandline tools.

After tools setup (sing keys, debug tokens, etc), I've tried to repackage my apk file with this command (source apk file was in apk/ folder and destination for bar file was bar/ folder)

```
./apk2bar apk/ -d bbplaybookdebugtoken.bar -t bar/ -a "zasadnyy" -cg
```

When I've got .bar file, I've installed it with command:

```bash
/batchbar-deploy bar/ 192.168.1.35 mysecretpass
```

Unfortunatelly result was unsuccsessful, app name was incorrectly encoded again. After first fail I've read documentation a bit more and tried to use [approach described on developer.blackberry.com](http://developer.blackberry.com/android/documentation/creating_a_custom_manifest_file_2016828_11.htm).

When I unzipped bar file and opened `MANIFEST.MS` - I've found this line:

```
Application-Name: –ì–µ—Ä–æ–∏
```

According to documentation solution should be quite strait-forward: 

1. Rename `MANIFEST.MS` to `<you apk name>.mf`
2. Update incorrect properties, in my case I've changed line from above to `"Application-Name: Герои"`
3. Put edited manifest file in the same folder as `<your apk name>.apk` and rerun `apk2bar` tool with `-m` parameter, e.g.:

```bash
./apk2bar apk/ -d bbplaybookdebugtoken.bar -t bar/ -a "zasadnyy" -m -cg
```

 Repackage, deploy, run and ..... and again **FAIL**. Application name was "–ì–µ—Ä–æ–∏".

After second fail, I decided to make dirty hack, I've edited `MANIFEST.MF` directly in repackaged bar file (Unzip → edit manifest → zip → change file extension to .bar).

Deploy updated .bar file to playbook and .... **YEAH**, we've got cyrilic app name!

##### Conclusion and FIX:
- Looks like in 1.5 release if apk2bar tool manifest encoding is misconfigured (in ver. 1.3 it worked just ok)
- In oder to FIX issue: unzip unsigned bar file → edit manifest → zip → change file extension back to .bar
