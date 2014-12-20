---
layout: article
title: "Best test devices for game development"
author: "Vitaliy Zasadnyy"
description: ""
date: 2014-06-09T22:20:38+02:00
estimate: "4 mins"
categories: [unity3d]
post: true
image: ""
external: true
sourceName: "Nravo Developers"
sourceUrl: "http://developers.nravo.com/best-test-devices-for-game-development"
---

Recently I had a task to select what Android phones to buy to extend company’s test device list. To be more precise, I had to select 4-6 phones that will cover most part of possible hardware configurations (screen size, GPU vendor, etc) taking into account that mainly we make games using Unity 3D.
 

##### Why is it important to test on devices with different GPUs?

If we’re talking about iOS, this question doesn’t make sense because all iPhones and iPads use PowerVR GPUs. But Android devices can be powered by [Adreno][adreno], [Tegra][tegra], [Mali][mali] or [PowerVR][povervr] GPUs. These differ in texture formats and how alpha is handled, and of course they all have different drivers and shader compilers. Unity documentation recommends using ETC texture compression, which is supported by all Android devices, is ‘safe’ and this is basically true, but in some cases ETC could not work the best or it’s possible to achieve better performance using other compression format adopted for certain GPU.
 

##### Results of small market research I’ve made.

According to statistics from [AppBrain][appbrain] for today the most popular Android phones are:

1. Samsung Galaxy S3: 7.5 %
2. Samsung Galaxy S4: 6.2 %
3. Samsung Galaxy S2: 3.8 %
4. Samsung Galaxy Note 2: 2.9 %
5. Samsung Galaxy S3 Mini: 2.5 %
 

Top device models according to [Unity Hardware Stats][unity-stats]:

1. Galaxy M: 4.1%
2. Galaxy S4: 4.0%
3. Galaxy Tab 3 7.0: 3.9%
4. MI-2: 3.4%
5. Galaxy Note 3: 3.2%
6. Galaxy Note II: 3.1%
7. Galaxy S2: 3.1%
8. Galaxy S3: 3.0%
9. Galaxy S3 Mini: 2.2%
10. Galaxy S4 LTE: 2.0%
 

Most popular GPU models according to [Unity Hardware Stats][unity-stats] data:

1. Mali 400 MP: 26.8%
2. PowerVR SGX544: 10.1%
3. Adreno 320: 8.5%
4. PowerVR SGX531: 7.1%
5. Adreno 330: 5.9%
6. Adreno 200: 5.7%
7. Videocore IV: 5.4%
8. PowerVR SGX540: 5.4%
9. Adreno 203: 4.7%
10. Adreno 305: 4.6%
 
After merging all statistical data and requirements together we’ve got table that shows what devices to buy to fulfill the most popular gpu/screen size combinations:
Test devices table

![result table]({{ site.baseurl }}/img/vitaliy/posts/best-test-devices-for-game-development-table.png)
 
<div markdown="1" class="note">
**NOTE**

[Kindle Fire][kindle] and [Nvidia Shield][shield] are in the table, but not in statistics data.

 First one was selected to list because of it’s almost square screen that allows you to test your UI layouts on non-standard proportions. On the other hand it’s good to have Amazon device if you’ll decide to publish game to their store.
 
 According Nvidia Shield, it is the perfect device to test user interaction using mobile game controller.
</div>

 
Do you use other devices for game testing? Share you list in the comments.


[adreno]: http://en.wikipedia.org/wiki/Imageon
[tegra]: http://en.wikipedia.org/wiki/Tegra
[mali]: http://en.wikipedia.org/wiki/Mali_(GPU)
[povervr]: http://en.wikipedia.org/wiki/PowerVR
[appbrain]: http://www.appbrain.com/stats/stats-index
[unity-stats]: http://stats.unity3d.com/mobile/device-android.html
[kindle]: http://www.amazon.com/kindle-fire-hdx-student-gaming-tablet/dp/B00BWYQ9YE
[shield]: http://shield.nvidia.com/

