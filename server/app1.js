/**
 * Created by ant on 2019/3/21.
 */
var express = require('express');

var app = express();

const bodyParser = require('body-parser');

//设置全局使用
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");// 这里设置允许所有跨域访问
    res.header("Access-Control-Allow-Headers", "Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});




//响应post请求
app.post('/submit', function (req, res) {
    console.log(req.body);
    res.send(`title:${req.body.title},url:${req.body.url}`); // 向前端发送数据
   
})

//响应get请求
app.get('/getdate',function(req, res) {
        // 返回下面数据
        res.send('[{ "id":1, "data":2},{"id":2,"data":5},{"id":3,"data":1},{"id":4,"data":3},{"id":5,"data":2},{"id":6,"data":4},{"id":7,"data":11}]');
       
    }

)

app.listen(8081, function () {
    console.log('success listen...8081');
});