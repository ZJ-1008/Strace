// 这里是数据库，你可以在这里添加无数个产品  
// 格式： "唯一的ID": { 产品信息 },  
  
const productDB = {  
    "apple-001": {  
        "name": "红富士苹果 (礼盒装)",  
        "info": "产地：山东烟台 | 糖度：13%",  
        "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",   
        "history": [  
            {"date": "2023-10-01", "msg": "果园采摘完毕"},  
            {"date": "2023-10-03", "msg": "进入冷链仓库"},  
            {"date": "2023-10-05", "msg": "发往北京集散中心"}  
        ]  
    },  
    "tea-888": {  
        "name": "高山云雾绿茶",  
        "info": "等级：特级 | 采摘：明前",  
        "image": "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?w=400",  
        "history": [  
            {"date": "2023-03-20", "msg": "完成杀青干燥"},  
            {"date": "2023-03-25", "msg": "质检合格，已装罐"}  
        ]  
    }  
};  
