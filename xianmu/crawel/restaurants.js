const https = require('https')
const {
    insert
} = require('./db')
https.get('https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=23.12908&longitude=113.264359&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });

    // 拿取数据
    res.on('end', () => {
        let restaurants = JSON.parse(rawData).items
        console.log(restaurants)
        restaurants.forEach(element => {
            insert('restaurants', [{
                name: element.restaurant.name,
                next_business_time: element.restaurant.next_business_time,
                description: element.restaurant.description,
                distance: element.restaurant.distance,
                src:'https://cube.elemecdn.com/f/b7/a8d6c61b6f26b0d9dd6c869a22cd9jpeg.jpeg?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed'
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});