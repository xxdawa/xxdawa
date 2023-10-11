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
`sudo sed -i s|^deb\ http|deb\ https://xx.eu.org/http|g zorin*.list`

## 设置APT代理 （可选）
使用命令行，临时设置APT代理
  + `sudo apt -o acquire::http::proxy="http://yourproxyserver:port <update/install>"`  
  + `sudo apt -o acquire::http::proxy=false -o acquire::https::proxy=false -o acquire::ftp::proxy=false <update/install>`

创建代理配置文件，永久设置APT代理
  + `nano /etc/apt.conf.d/95proxy.conf`

添加如下内容：
```
Acquire {
   http::Proxy "http://192.168.0.106:8080/";
   https::Proxy "http://192.168.0.106:8080/";
}
```

## 安装虚拟机优化工具 (可选)
`sudo apt update`
`sudo apt install open-vm-tools-desktop`


