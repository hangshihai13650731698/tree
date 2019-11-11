const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/shopping/v2/entries?latitude=23.12908&longitude=113.264359&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        let entries = JSON.parse(rawData)[0].entries
        console.log(entries)
        entries.forEach(element => {
            insert('eleGrid', [{
                name: element.name
                // src:'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?x-oss-process=image/format,webp/resize,w_90,h_90,m_fixed';
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});