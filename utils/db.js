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
        const result = wx.getStorageSync('result')
        soul = result.filter((item) => item.type === 'soul')[0].category
        weapon = result.filter((item) => item.type === 'weapon')[0].category
        shadow = result.filter((item) => item.type === 'shadow')[0].category
        return {
            soul,
            weapon,
            shadow
        }
    }
}

// 使用本地的data开发

// function getAlldata() {
//     try {
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
//             duration: 1000
//         })
//     }
// }



// 根据ID查询神魂详情数据
function getSoulDetailById(id) {
    const result = getDetailById('soul', id)
    return result[0]
}

// 根据ID查询残影或灵器详情数据
function getItemDetailById(type, id) {
    const result = getDetailById(type, id)
    return result[0]
}

// 在type集合中查询与id匹配的数据
function getDetailById(type, id) {
    wx.showLoading({
        title: '加载中',
    })
    try {
        const locaData = getApp().globalData
        let detail
        switch (type) {
            case 'soul':
                detail = locaData.soul
                break;
            case 'weapon':
                detail = locaData.weapon
                break;
            case 'shadow':
                detail = locaData.shadow
                break;
            default:
                break;
        }
        const target = detail.filter(item => item.id === id)
        console.log('getDetail', target)
        return target
    } catch (err) {
        wx.showToast({
            title: '获取详细信息失败',
            icon: 'error',
            duration: 1000
        })
    } finally {
        wx.hideLoading()
    }

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

// 检查数据是否加载成功，有定时器，注意消除
function waitDataDownload() {
    let locaData = getApp().globalData
    if (!locaData.soul) {
        const timeId = setInterval(() => {
            locaData = getApp().globalData
            if (locaData.soul) {
                clearTimeout(timeId)
            }
        }, 200);
    } else {
        return locaData
    }
}

module.exports = {
    getSoulDetailById,
    getCategoryByType,
    getItemDetailById,
    getAlldata
}