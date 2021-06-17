// 数据库工具类
// const db = require('../../utils/db')

// 初始化时一次性拉取所有文字数据，app.js中需要添加async 和 await

async function getAlldata() {
    try {
        wx.cloud.init()
        const db = wx.cloud.database()
        const _ = db.command
        let soul, weapon, shadow
        const result = (await db.collection('alldata').get()).data
        soul = result.filter((item) => item.type === 'soul')[0].category
        weapon = result.filter((item) => item.type === 'weapon')[0].category
        shadow = result.filter((item) => item.type === 'shadow')[0].category
        wx.setStorageSync('result', result)
        return {
            soul,
            weapon,
            shadow
        }
    } catch (e) {
wx.showToast({
    title: '获取数据失败',
    icon: 'error',
    duration: 2000
})
    }
}

// 使用本地的data开发

// async function getAlldata() {
//     try {
//         // 模拟延迟
//         await sleep(1500)
//         const result = require('../data/data').data
//         const soul = result.filter((item) => item.type === 'soul')[0].category
//         const weapon = result.filter((item) => item.type === 'weapon')[0].category
//         const shadow = result.filter((item) => item.type === 'shadow')[0].category
//         return {
//             soul,
//             weapon,
//             shadow
//         }
//     } catch (error) {
//         wx.showToast({
//             title: '获取数据失败',
//             icon: 'error',
//             duration: 2000
//         })
//     }
// }



// 根据ID查询神魂详情数据
async function getSoulDetailById(id) {
    const result = await getDetailById('soul', id)
    return await result[0]
}

// 根据ID查询残影或灵器详情数据
async function getItemDetailById(type, id) {
    const result = await getDetailById(type, id)
    return await result[0]
}

// 在type集合中查询与id匹配的数据
async function getDetailById(type, id) {
    try {
        const localData = await waitDataDownload()
        let detail
        switch (type) {
            case 'soul':
                detail = localData.soul
                break;
            case 'weapon':
                detail = localData.weapon
                break;
            case 'shadow':
                detail = localData.shadow
                break;
            default:
                break;
        }
        const target = detail.filter(item => item.id === id)
        console.log('getDetail', target)
        return target
    } catch (err) {}

}

// 获取type对应项目的目录
async function getCategoryByType(type) {
    // const locaData = getApp().globalData
    const localData = await waitDataDownload()
    let detail
    switch (type) {
        case 'soul':
            detail = localData.soul
            break;
        case 'weapon':
            detail = localData.weapon
            break;
        case 'shadow':
            detail = localData.shadow
            break;
        default:
            break;
    }
    console.log(`get ${type} category success`)
    return detail
}

// 检查数据是否已经加载，有定时器，注意消除
async function waitDataDownload() {
    let localData
    wx.showLoading({
        title: '数据加载中',
    })
    for (let i = 0; i < 10; i++) {
        try {
            localData = getApp().globalData
            if (Object.keys(localData).length >= 3) {
                wx.hideLoading()
                break
            } else if (i === 9) {
                throw new Error('获取数据超时')
            } else {
                await sleep(200)
            }
        } catch (err) {
            wx.hideLoading()
            console.log(err)
            wx.showToast({
                title: '获取数据失败',
                icon: 'error',
                duration: 2000
            })
        }
    }
    return localData
}

// 休眠器，休眠指定时长，阻塞进程
function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval)
    })
}

module.exports = {
    getSoulDetailById,
    getCategoryByType,
    getItemDetailById,
    getAlldata
}