var express = require('express');
var app = express();

app.set('views','./views')      //放模板文件的目录
// app.set('view engine', 'html'); // 注册模板引擎

app.use(express.static('public'));

app.get('/',function (req, res) {
    // res.send('Hello zys')
    res.render('index', { title: 'Hey', message: 'Hello there!'});
})

app.get('/user',function (req, res) {
    res.send('user router')
})

var server = app.listen(3000,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(server.address())
    console.log('Example app listen at http://%s:%s',host,port);
})