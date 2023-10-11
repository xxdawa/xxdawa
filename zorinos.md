# Zorin 16.3 Pro 系统使用体验
## 替换源
替换Ubuntu官方源
- `sudo sed -i s@.*//archive.ubuntu.com@//mirrors.tencent.com@g /etc/apt/source.list`
- `sudo sed -i 's/security.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list` (可选)
- `sudo sed -i 's/http:/https:/g' /etc/apt/sources.list` (可选)
 
替换PPA和zorin官方源
1. 切换到/etc/apt/source.list.d/目录下  
`cd /etc/apt/source.list.d/`
2. 将源地址修改为第三方源或你自己的代理，例如代理服务器是https://xx.eu.org<br>
`sudo sed -i s@^deb\ @deb\ https://xx.eu.org/@g zorin*.list`<br>
3. 回退PPA和zorin官方源   
`sudo sed -i s@^deb\ https://xx.eu.org/@deb\ @g zorin*.list`

替换flatpak官方源
1. 查看远端配置，是全局配置（system）还是当前用户配置（user）    
`flatpak remote -d`
2. 根据上一步查询结果，修改远端地址
使用remote-modify 参数    
`flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub`    
使用文本编辑器修改相应配置文件中url地址    
`/var/lib/flatpak/repo/config`  （全局配置）    
`~/.local/share/flatpak/repo/config`  （用户配置）
     

## 设置APT代理 （可选）
使用-o参数，临时设置APT代理
  + `sudo apt -o acquire::http::proxy="http://yourproxyserver:port <update/install>"`  
  + `sudo apt -o acquire::http::proxy=false -o acquire::https::proxy=false -o acquire::ftp::proxy=false <update/install>`

创建代理配置文件，添加下面内容，永久设置APT代理
  + `nano /etc/apt.conf.d/95proxy.conf`
```
Acquire {
   http::Proxy "http://192.168.0.106:8080/";
   https::Proxy "http://192.168.0.106:8080/";
}
```

## 安装虚拟机优化工具 (可选)
`sudo apt update`
`sudo apt install open-vm-tools-desktop`


