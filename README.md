# flv_ass_play_station

## 随时播放你的flv直播录像与弹幕

### 简介

[dplayer](https://dplayer.diygod.dev/)+[ass](https://github.com/weizhenye/ASS)+[flv](https://github.com/Bilibili/flv.js/)=本项目

本项目能够让你随时随地观看带有带有弹幕的偶像直播回放。

### demo

地址：[满舰饰假子直播回放 (zaojique.org)](http://zaojique.org/)  （已失效）

存在缺点：不能一次性准确地在播放器上显示视频大小，但不影响正常使用。只需点击一下全屏即可解决。

![](https://p.sda1.dev/10/50474977eda4949050c78c5fc0975130/%E6%8D%95%E8%8E%B73.PNG)

### 安装

配置好你的服务器（并且安装好nginx或其他）后，将release放到  */www/wwwroot/149.28.238.5(写你自己的，这是我的)/* 路径中解压好就能用了

![](\README\1.PNG)

当然，现在还没有视频，你可以[配置好B站录播姬](https://rec.danmuji.org/user/install/cli-systemd/) ，

![](\README\2.PNG)

录播姬工作目录设置在 */www/wwwroot/149.28.238.5(写你自己的，这是我的)/video/* 中，酌情设置弹幕并把文件名命名设置为

```
{{ "now" | time_zone: "Asia/Shanghai" | format_date: "yyyyMMdd" }}.flv
```

如果工作正常，在主播直播结束后会在前面提到的video文件夹下。同时还会有xml弹幕文件。你可以[酌情](https://rec.danmuji.org/user/other-projects/#%E5%BC%B9%E5%B9%95%E6%96%87%E4%BB%B6%E5%A4%84%E7%90%86%E5%B7%A5%E5%85%B7)把xml转换成ass以供播放。

使用其他录制软件的话，只需要flv文件保存在video文件夹中并以日期命名（比如20230328.flv）就行

### 功能描述

网页会显示带有昨天、前天和大前天日期的视频链接，点开就能看。

待办项：能够被设置为定时执行的删除旧视频旧弹幕并将新xml转换为ass的脚本

### 另

有编译好的linux弹幕工厂，有需要自取。


