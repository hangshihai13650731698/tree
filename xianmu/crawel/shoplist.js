const https = require('https')
const {
    insert
} = require('./db')
// https.get('https://h5.ele.me/restapi/shopping/v2/entries?latitude=23.12908&longitude=113.264359&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5', (res) => {
//     res.setEncoding('utf8');
//     let rawData = '';
//     res.on('data', (chunk) => {
//         rawData += chunk;
//     });
// res.on('end', () => {
let list = [{
        id: 1,
        src: "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 2,
        src: "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 3,
        src: "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 4,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 5,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    },
    {
        id: 6,
        src: "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 7,
        src: "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 8,
        src: "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 9,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 10,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    },
    {
        id: 11,
        src: "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 12,
        src: "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 13,
        src: "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 14,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 15,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    },
    {
        id: 16,
        src: "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 17,
        src: "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 18,
        src: "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 20,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 21,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    },
    {
        id: 22,
        src: "https://cube.elemecdn.com/7/9e/132d8e5ac34bf518cb29ec8a1c810jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 23,
        src: "https://cube.elemecdn.com/f/72/a582b4c8c2a6717f9e1b51811edafjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 24,
        src: "https://cube.elemecdn.com/0/1c/35b6069fce33cfa254f84df6679ffjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 25,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 26,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    },
    {
        id: 27,
        src: "https://cube.elemecdn.com/5/74/fd08e51192616095636621d30655bjpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "麻辣双拼+肌肉丸南非警方京东方科技",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售127 好评0%",
        price: 25
    },
    {
        id: 28,
        src: "https://cube.elemecdn.com/8/24/ce2671e9e3f62c99169992f906a7epng.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【麻辣】满满龙虾饭",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售41 好评100%",
        price: 40.9
    },
    {
        id: 29,
        src: "https://cube.elemecdn.com/4/9c/2e8340da7362da4b4e9946d1e1a80jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "口味，香香，满满龙虾，特别满足",
        xiaoliang: "月售77 好评100%",
        price: 12.9
    },
    {
        id: 30,
        src: "https://cube.elemecdn.com/2/03/b43c48471beeb51c5e72606d62049png.png?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤腹膜肉】",
        weidao: "麻辣双拼+鸡肉丸",
        xiaoliang: "月售97 好评100%",
        price: 82.9
    },
    {
        id: 31,
        src: "https://cube.elemecdn.com/e/34/81d28476edcb122d37f382ca78ce0jpeg.jpeg?x-oss-process=image/resize,m_lfit,w_140,h_140/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp",
        title: "【碳烤地方腹膜肉】",
        weidao: "麻辣双方法拼+鸡肉丸",
        xiaoliang: "月售99 好评100%",
        price: 88.9
    }
]
// let entries = JSON.parse(rawData)[0].entries
// console.log(entries)
list.forEach(element => {
    insert('shop', [{
        id: element.id,
        thumb: element.src,
        title: element.title,
        desc: element.weidao,
        // xiaoliang: element.xiaoliang,
        price: element.price,
        num: 99
    }])
});
// });
// }).on('error', (e) => {
// console.error(`出现错误: ${e.message}`);
// });