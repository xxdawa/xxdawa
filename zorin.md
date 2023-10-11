# Zorin 16.3 Pro 系统
## 安装初体验
### 替换源
替换Ubuntu官方源
- ```sudo sed -i s@.*//archive.ubuntu.com@//mirrors.tencent.com@g /etc/apt/source.list```
- ```sudo sed -i 's/security.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list``` (可选)
- ```sudo sed -i 's/http:/https:/g' /etc/apt/sources.list``` （可选）

替换PPA和zorin官方源
+ 修改 /etc/apt/source.list.d/目录下后缀为.list的文件内容，将源地址修改为第三方源或你的代理

### 设置APT代理 （可选）
设置APT代理
  + `sudo apt -o acquire::http::proxy="http://yourproxyserver:port <update/install>"`

禁用APT代理
  + ```sudo apt -o acquire::http::proxy=false -o acquire::https::proxy=false -o acquire::ftp::proxy=false <update/install>```

添加配置文件，写入代理内容永久生效
  + nano /etc/apt.conf.d/95proxy.conf

