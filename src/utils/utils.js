const axios = require('axios')

//1.获取日期时间
//处理日期
const formatWeek = (week) => {
    switch (week){
        case 1:
            return '星期一'
        case 2:
            return '星期二'
            break; break;
        case 3:
            return '星期三'
            break;
        case 4:
            return '星期四'
            break;
        case 5:
            return '星期五'
            break;
        case 6:
            return '星期六'
            break;
        case 0:
            return '星期天'
            break;
        default:
            break;
    }
}
const getDate = () => {
    //xxxx年xx月xx日 星期x
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const week = new Date().getDay();

    return `今天是${year}年${month}月${day}日 ${formatWeek(week)}`;
}

//console.log(getDate());
//getDate();

//2.获取天气
const getWeather = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://yiketianqi.com/api?unescape=1&version=v6&appid=43655373&appsecret=xte2iD1d&cityid=101240711')
            .then(res => {
                const {data} = res;
                resolve({
                    low:data.tem2,
                    high:data.tem1,
                })
            }).catch(err => {
                reject(err);
            })
    })
}

//3.获取土味情话
const getLoveWords = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://apis.tianapi.com/saylove/index?key=dc092896f00781c285d0809433a3a3b6')
            .then(res => {
                const { data } = res;
                //console.log(data.result.content)
                resolve(data.result.content)
            }).catch(err => {
                reject(err);
        })
    })
}

//4.计算恋爱天数
const getLoveDays = () => {
    const startTime = "2015-04-25 00:00:00";  //开始时间
    const startDate = new Date(startTime).getTime();
    const nowDate = new Date();    //结束时间
    return Math.floor((nowDate - startDate) / (24 * 3600 * 1000));   //差的天数
}

//距离小笨蛋的生日
const dayOfBabyNextBirth = () => {
    const nextDate = "2023-10-15 00:00:00";  //开始时间
    const nextTime = new Date(nextDate).getTime();
    const nowTime = new Date();    //结束时间
    return Math.floor((nextTime - nowTime) / (24 * 3600 * 1000));   //差的天数
}

//距离小笨蛋的生日
const dayOfMyNextBirth = () => {
    const nextDate = "2023-12-04 00:00:00";  //开始时间
    const nextTime = new Date(nextDate).getTime();
    const nowTime = new Date();    //结束时间
    return Math.floor((nextTime - nowTime) / (24 * 3600 * 1000));   //差的天数
}

//getLoveWords()

module.exports = {
    getDate,
    getWeather,
    getLoveWords,
    getLoveDays,
    dayOfBabyNextBirth,
    dayOfMyNextBirth
}
