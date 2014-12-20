---
layout: article
title: "Mastering Unity Project Folder Structure. Level 1 – Reserved Folders"
author: "Vitaliy Zasadnyy"
description: ""
date: 2014-02-13T15:14:41+02:00
estimate: "7 mins"
categories: [unity3d]
post: true
image: ""
external: true
sourceName: "Nravo Developers"
sourceUrl: "http://developers.nravo.com/mastering-unity-project-folder-structure-level-1-reserved-folders"
---

![Reserved]({{ site.baseurl }}/img/vitaliy/posts/mastering-unity-project-folder-structure-level-1-hero.jpg)

In previous post I’ve described which files and folders are located in Unity project root, which are responsible for what and what should be kept under version control. Now we can move on to Assets folder. In general under Assets you can create whatever sub folders you want, but there are some reserved folder names for special needs.
 
I’ve started to write this post on my own, but later found page on Unity Wiki about “Special Folder Names in your Assets Folder”. Here you can find shortened version with some additional info from our team experience, original version available on [wiki](http://wiki.unity3d.com/index.php/Special_Folder_Names_in_your_Assets_Folder).
{:.quote}
 

**Standard Assets**

Scripts in here are always compiled first. Scripts are output to either `Assembly-CSharp-firstpass`, `Assembly-UnityScript-firstpass`, or `Assembly-Boo-firstpass` project, depending on the language. More information about script compilation order in [documentation](http://docs.unity3d.com/Documentation/Manual/ScriptCompileOrderFolders.html).
 
Scripts inside the Standard Assets folder will be compiled earlier than your other scripts. So, placing scripts in Standard Assets is one way for C# scripts to be able to access .js scripts or vice-versa.
 
 
**Pro Standard Assets**

Same with `Standard Assets`, only files here are meant for the Pro version. This means assets here make use of Pro-only features like render textures and screen-space effects. Again, scripts here are compiled earlier, allowing them to be accessed by other scripts (of any language) that are outside the `Pro Standard Assets` folder.
 

**Editor**

The `Editor` folder name is a special name which allows your scripts to access to the Unity Editor Scripting API. If your script uses any classes or functionality from the UnityEditor namespace, it has to be placed in a folder called Editor.
 
Scripts inside an Editor folder will not be included in your game’s build. They are only used in the Unity Editor.
 
You can have multiple `Editor` folders throughout your project.


Note: an `Editor` folder which is not located in another special folder can be placed/nested anywhere in the project. However, if it’s in `Standard Assets`, `Pro Standard Assets`, or `Plugins`, it must be a direct child of these folders. Otherwise, it will not get processed. For example, it’s ok to have a path like `My Extension/Scripts/Editor`, but if placed in a special folder, it must always be `Standard Assets/Editor/My Extension/Scripts`, or `Pro Standard Assets/Editor/My Extension/Scripts`, or `Plugins/Editor/My Extension/Scripts`.
{:.note}

More about custom editors on the Unity [documentation](http://docs.unity3d.com/Documentation/Components/ExtendingTheEditor.html).
 

**Plugins**

The `Plugins` folder is where you must put any native plugins, which you want to be accessible by your scripts. They will also be automatically included in your build. Take note that this folder may not be in any subfolder (it has to reside within the top-level `Assets` folder).
 
In Windows, native plugins exist as `.dll` files, in Mac OS X, they are `.bundle` files, and in Linux, they are `.so` files.
 
Like the `Standard Assets` folder, any scripts in here are compiled earlier, allowing them to be accessed by other scripts (of any language) that are outside the `Plugins` folder.
 
More information about creating [native Android](http://docs.unity3d.com/Documentation/Manual/PluginsForAndroid.html) and [iOS plugins](http://docs.unity3d.com/Documentation/Manual/PluginsForIOS.html) in Unity.
 

**Resources**

The `Resources` folder is a special folder which allows you to access assets by file path and name in your scripts, rather than by the usual (and recommended) method of direct references (as variables in scripts via drag-and-drop in the Unity Editor).
 
For this reason, caution is advised when using it. All assets you put in the `Resources` folder are always included in your build (even unused ones), because Unity has no way of determining which Resources-based assets are used or not.
 
You can have multiple `Resources` folders throughout your project, so it is not recommended to have an asset in one `Resources` folder and have another asset with that same name in another `Resources` folder.
 
Once your game is built, all assets in all `Resources` folders get packed into the game’s archive for assets.
 
Also see [Loading Resources at Runtime](http://docs.unity3d.com/Documentation/Manual/LoadingResourcesatRuntime.html) topic from documentation.
 

**Gizmos**

The gizmos folder holds all the texture/icon assets for use with `Gizmos.DrawIcon()`. Texture assets placed inside this folder can be called by name, and drawn on-screen as a gizmo in the editor.
 

**WebPlayerTemplates**

Used to replace the default web page used for web builds. Any scripts placed here will not be compiled at all. This folder has to be just under `Assets` folder `Assets/WebPlayerTemplates/`. [More information](http://docs.unity3d.com/Documentation/Manual/UsingWebPlayertemplates.html).
 

**Streaming Assets**

Any files in here are copied to the build folder as is, without any changes (except for mobile and web builds, where they get embedded into the final build file). The path where they are can vary per platform but is accessible via `Application.streamingAssetsPath`.
 
See documentation about [Application.streamingAssetsPath](http://docs.unity3d.com/Documentation/ScriptReference/Application-streamingAssetsPath.html) and [Streaming Assets](http://docs.unity3d.com/Documentation/Manual/StreamingAssets.html).
 
 
More posts from Mastering Unity Project Folder Structure series:

- Level 0 – Folders required for version control systems
- Level 2 – Assets folder organization
