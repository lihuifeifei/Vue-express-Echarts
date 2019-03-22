/**
 * Created by ant on 2019/3/20.
 */
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
// res常用的函数是send和sendFile，sendFile使用绝对路径，以下将项目打包之后放在express的服务器中运行
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')));
// 访问单页
app.get('*', function (req, res) {
    var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    res.send(html);
});
// 监听
app.listen(3000, function () {
    console.log('success listen...3000');
});

