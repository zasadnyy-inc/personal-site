---
layout: article
title: "Mastering Unity Project Folder Structure. Level 0 – Folders required for version control systems"
author: "Vitaliy Zasadnyy"
description: ""
date: 2014-02-12T14:42:57+02:00
estimate: "8 mins"
categories: [unity3d]
post: true
image: ""
external: true
sourceName: "Nravo Developers"
sourceUrl: "http://developers.nravo.com/mastering-unity-project-folder-structure-level-0-vcs"
---

![image]({{ site.baseurl }}/img/vitaliy/posts/mastering-unity-project-folder-structure-level-0-vcs/hero-image.jpg)

In this series of posts I’ll spot some light on Unity Project folder structure. What folders and files are required for version control systems, what are reserved folders names and their usage and as a bonus how do we organize resources and other files in our Unity projects at Nravo.

 
Disclaimer. 
Before gamedev I used to be an Android developer and I really liked predefined and consistent folder structure across all projects, so I was a bit confused when we started first Unity game.
{:.quote}
 

#### Mastering Level 0. Folders required for version control systems.

![Test Unity Project Folder StructureLets]({{ site.baseurl }}/img/vitaliy/posts/mastering-unity-project-folder-structure-level-0-vcs/folder-structure.png){:.pull-left style="margin: 10px 30px 30px 0px;"}

Lets create new Unity project called “testproject”, import “Standard Assets (Mobile)” package, create new `Test.cs` script attached to camera and check our folder structure.
 
You’ll find that there are quite a lot of files and folders, good news that **only two folders should be kept under source control: `Assets` and `ProjectSettings`**. Other are generated from this two.
 

##### Here is a quick overview of all files and folders.
 
`Assembly-CSharp-vs.csproj` and `Assembly-CSharp.csproj` – Visual Studio (with `-vs` suffix) and MonoDevelop project files generated for your C# scripts.
 
`Assembly-UnityScript-vs.unityproj` and `Assembly-UnityScript.unityproj` – the same project files but for JavaScript scripts.
 
`testproject.sln` and `testproject-csharp.sln` – solution files for IDEs, first one includes all C#, JavaScript and Boo projects, while the second one – only C# projects and is designed to be opened in Visual Studio, because VS doesn’t know to handle JavaScript and Boo projects.
 
`testproject.userprefs` and `testproject-csharp.userprefs` – configuration files where MonoDevelop stores current opened files, breakpoints, watches etc.
 
Note 1: all files listed above except `.userprefs` are re-generated each time you select Assets → Sync MonoDevelop Project in Unity Editor menu.
{:.note}

Note 2: read why there are so many project files generated from [Unity documentation](https://docs.unity3d.com/Documentation/Manual/ScriptCompileOrderFolders.html).
{:.note}

Tip: after syncing project MonoDevelop will open testproject.sln with all projects but if you don’t have JavaScript code you can open testproject-csharp.sln to have twice less project files and no errors related to JS.
![image]({{site.baseurl }}/img/vitaliy/posts/mastering-unity-project-folder-structure-level-0-vcs/level-0-settings.png) <!-- Unity Project Folder Structure. Tip 1 -->
{:.note}
 
`Assets` – folder where all game resources are stored, including scripts, textures, sound, custom editors etc. Definitely the most important folder in your project.
 
`ProjectSettings` – in this folder Unity stores all project settings like Physics, Tags, Player settings etc. In other words everything you setup from Edit → Project Settings set of menus goes into this folder.
![image]({{ site.baseurl }}/img/vitaliy/posts/mastering-unity-project-folder-structure-level-0-vcs/level-0-tip1.png) <!-- Unity Project Folder Structure. Project Settings -->
 
`Library` – local cache for imported assets, when using external version control system should be completely ignored.
 
`obj` and `Temp` – folders for temporary files generated during build, first one used by MonoDevelop, second – by Unity.
 
 
#### Version Control System setup

There are several options how we can keep track of versions. Traditionally Unity encourages developers to use [Unity Asset Server](http://docs.unity3d.com/Documentation/Manual/AssetServer.html). Our team tried to use it for one month after what we agreed that Asset Server can’t handle everything we need, it doesn’t have branches, locks, it’s paid (requires Team Licence, +500$) and looks more like simplified SVN. So we have decided to switch to GIT.
 
##### Here is a short setup guide for Unity 4.3

1. Enable External option in Unity → Preferences → Packages → Repository
2. Switch to Hidden Meta Files in Editor → Project Settings → Editor → Version Control Mode
3. Switch to Force Text in Editor → Project Settings → Editor → Asset Serialization Mode
4. Save scene and project from File menu
 
Now you are ready to use your favorite version control system. Don’t forget to add everything except Assets and ProjectSettings folders to your ignore list. Here is `.gitignore` we use in our project:

```gitignore
# =============== #
# Unity generated #
# =============== #
Temp/
Library/
 
# ===================================== #
# Visual Studio / MonoDevelop generated #
# ===================================== #
ExportedObj/
obj/
*.svd
*.userprefs
/*.csproj
*.pidb
*.suo
/*.sln
*.user
*.unityproj
*.booproj
 
# ============ #
# OS generated #
# ============ #
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```
 
For more detailed instructions how to setup version control checkout this posts:

- [SVN setup instruction from Unity documentation](http://docs.unity3d.com/Documentation/Manual/ExternalVersionControlSystemSupport.html)
- [More detailed SVN setup instruction with a lot of explanations](http://3dgep.com/?p=5105)
- [Just in case you’ll decide to use Unity Asset Server – official setup guide](http://docs.unity3d.com/Documentation/Manual/AssetServer.html)
 

In the second post I’ll describe what predefined folder does Unity use and what for.
 
 
More posts from Mastering Unity Project Folder Structure series:

- [Level 1 – Reserved Folders]({{ site.baseurl }}/blog/mastering-unity-project-folder-structure-level-1-reserved-folders/)
- [Level 2 – Assets folder organization]({{ site.baseurl }}/blog/mastering-unity-project-folder-structure-level-2-assets-organization/)