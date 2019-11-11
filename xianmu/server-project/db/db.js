const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = '1909';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}
// 查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
// 增
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
//改
const  updata = (col, query, query1) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col); //表名称
        collection.updateOne(query, {
            $set: query1
        }, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
// 删除                 query为多个对象时用[{},{}]表示
const deleteOne = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col); //表名
        //要删除的对象
        collection.deleteOne(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}
module.exports = {
    find,
    insert,
    updata,
    deleteOne
}