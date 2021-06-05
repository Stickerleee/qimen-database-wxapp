const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 设定最高等级和叠加数量

const NULL = 0
const MAX_LEVEL = 40
const MAX_NEGATIV_STACK = 15
const MAX_POSITIV_STACK = 40
const MAX_NEGATIV_BASE_STACK = 100
// 计算强化后的数值
function getMaxEffect(strAry,nums,updata,stack){
  let result = ''
  if (!strAry.length) {
      return result
  }
  const len = strAry.length-1
  stack = stack.length ? stack : [0,0,0]
  for (let i = 0;i<len;i++){
      const newNum = nums[i] + updata[i] * MAX_LEVEL + stack[i] * MAX_POSITIV_STACK
      result += strAry[i] + newNum
  }
  return result + strAry[len]
}
// 组合字符串和数值
function getBaseEffect(strAry,nums){
  return getMaxEffect(strAry,nums,[0,0,0],[0,0,0])
}

// 根据卦象字符获得对应icon路径
function getBaguaIcon(str) {
	switch (str) {
        case '乾': return 'bagua_qian';
            
        case '坤': return 'bagua_kun';
            
        case '离': return 'bagua_li';
            
        case '坎': return 'bagua_kan';
            
        case '震': return 'bagua_zhen';
            
        case '巽': return 'bagua_xun';
            
        case '艮': return 'bagua_gen';
            
        case '兑': return 'bagua_dui';
            
        default: return
            
    }
}
// 卦象与颜色
function getBaguaColor(str) {
	switch (str) {
        case '乾': return '#A5C2D2';
            
        case '坤': return '#D7AA19';
            
        case '离': return '#E45847';
            
        case '坎': return '#619DFF';
            
        case '震': return '#8B72F6';
            
        case '巽': return '#1FCBB2';
            
        case '艮': return '#D77405';
            
        case '兑': return '#7AD52D';
            
        default: return
            
    }
}
// 卦象名数组
const diviName = ['乾','坤','离','坎','震','巽','艮','兑']
    

module.exports = {
    getBaguaIcon,
    diviName,
    getBaguaColor
}
