---
layout: article
title: "How to make Unity work better on Maverik"
author: "Vitaliy Zasadnyy"
description: "Long, long time ago there was a bug..."
date: 2014-01-19T23:16:46+02:00
estimate: "2 mins"
categories: [unity3d, productivity]
post: true
external: true
sourceName: "Nravo Developers"
sourceUrl: "http://developers.nravo.com/how-to-make-unity-work-better-on-maverick"
---

![image]({{ site.baseurl }}/img/vitaliy/posts/how-to-make-unity-work-better-on-maverick/Unity-Issue-Tracker-2014-01-18-15-32-21.png)

[Maverick performance issue](http://issuetracker.unity3d.com/issues/maverick-and-unity-performance-issues) was opened just after Maverick release and now is the most voted on Unity bug tracker. Unfortunately or not, Apple has made new version of their Mac OS free and big part of users updated to the latest version without doubts and all of them got affected by this issue.
 
But today we’ll talk not about how “bad” or “good” Apple is, but how to improve Unity editor performance on Maverick.
 
Note: this instructions won’t fix issue completely, but at least make editor performance suitable to work with. 
{:.note}

So let’s start:
 
1. **Enable “Prevent App Nap”** for Unity and MonoDevelop. Locate Unity.app and MonoDevelop.app → right click → Get info → Prevent App Nap. This setting helps with app freezes when switching between applications. Btw App Nap don’t play well also with [other applications](http://www.zdnet.com/mac-mavericks-app-nap-power-nap-dont-always-play-well-with-others-7000024792/).

2. **Turn off “Displays have separate spaces”** in Mission Control settings. Go System Preferences → Mission Control → Displays have separate spaces.

3. **Disable “Automatic graphics switching”** in Power Saver settings. Go System Preferences → Do one of the following: if you see Graphics options, select Higher Performance. You need to log out and then log in again for the change to take effect. If you see the “Automatic graphics switching” option, deselect it. Your Mac will always use high-performance graphics.
 
 
Early this week Thomas Petersen, QA Director in Unity Technologies wrote that they found the problem, let’s hope they’ll release fix for it soon:

> We have identified this as a leak in Maverick’s OpenGL ARB VBO implementation which is causing these issues. A build with a workaround has proven to work, but it is not the best solution. We have notified Apple about the problem. What exactly will happen has not yet been decided, so until there is a solution to the problem, it is best to not run on Mavericks.


**Update (29.01.14):** Unity releases version 4.3.4, where issue should be fixed. Download it [here](http://unity3d.com/unity/whats-new/unity-4.3.4).