var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  updata
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  // 让加载时间变慢点
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 5000)
  })
  let data = await find('eleGrid'); //查找表名称
  // res响应回来的数据
  res.json(data);
});
// 列表页
router.get('/restaurants', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('restaurants');
  res.json(data);
});

// 详情页获取数据 后端路由常用
router.get('/restaurantsgg', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    distance
  } = req.query
  // console.log(typeof (distance))
  let datad = await find('restaurants', {
    'distance': parseInt(distance)
  });
  // console.log(datad)
  res.json(datad);
});


// 加入购物车
router.get('/addcar', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    id,
    num
  } = req.query; //商品id和数量\

  // console.log(typeof (id))
  // 先查询
  let data1 = await find('goodcar', {
    id: parseInt(id),
  });
  console.log(data1)


  if (data1.lenght >= 1) { //查询表看有无商品，有则加数量
    let newSnum = data1[0].num + parseInt(num);
    console.log('更新的数量',newSnum)
    // 更新数据
    let data3 = await updata('goodcar', {
      id: parseInt(id),

    }, {
      num: parseInt(newSnum)
    })
    res.send('更新成功');
    window.console.log(520,'更新成功')
  } else {
    let data2 = await find('shop', {
      id: parseInt(id)
    });
    // console.log(typeof(id))
    console.log(data2)
    // 用解构法直接插进去
    await insert('goodcar', [{
      ...data2[0]
    }])
  }
  console.log('插入到购物车表')
})
// 购物车请求的数据渲染
router.get('/car', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('goodcar');
  res.json(data);
});
module.exports = router;