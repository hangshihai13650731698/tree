const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const request = require('request');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// app.get('/',(req,res)=>{
//     res.send('nihai');

// });
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});


app.post('/duanxin', (req, res) => {
    // 
    // res.append('Access-Control-Allow-Origin', '*');
    let code = ('000000' + Math.floor(Math.random() * 999999)).slice(-6);
    console.log(req.body)
    var queryData = querystring.stringify({
        mobile: req.body.phone, // 接受短信的用户手机号码
        tpl_id: req.body.tpl_id, // 您申请的短信模板ID，根据实际情况修改
        tpl_value: `#code#=${code}`, // 您设置的模板变量，根据实际情况修改
        key: req.body.key, // 应用APPKEY(应用详细页查询)
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            console.log(body.tpl_value)
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            console.log(jsonObj)
            console.log(123, response)
            res.json(code)
        } else {
            console.log('请求异常');
        }
    })
})
const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});