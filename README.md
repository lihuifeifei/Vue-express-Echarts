# demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
### Turn on the server
、、、
node app1.js
、、、

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

本项目为vue+express+Echart开发的小型demo。
框架使用vue前端框架，服务器使用express搭建，打包工具使用webpack，画图使用Echart.js，前后端交互使用axios。
功能分为两个： 
1.表单中输入title以及url，可以提交数据到服务器，其中包括表单验证。
2.将服务器端传送到客户端的数据画成曲线图，其中包括验证服务器端传回的数据。
本地服务器地址为：http://localhost：8080 
打包部署到网上的服务器地址为：http://localhost:8081 
与客户端交互的服务器地址为：http://localhost:3000
