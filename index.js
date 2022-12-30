const { params } = require('./src/config/config');
const { getToken } = require('./src/getToken/getToken');
const { sendMsg } = require('./src/sendMsg/sengMsg');
const { getDate,getWeather,getLoveWords,getLoveDays,dayOfBabyNextBirth,dayOfMyNextBirth } = require('./src/utils/utils');

const start =  async () => {
    let access_token = await getToken(params);
    let {low,high} = await getWeather();
    let loveWord = await getLoveWords();

    const data = {
        nowDate:{
            value:getDate(),
            //color:'#57E6E2'
        },
        city:{
            value:'会昌',
            //color:'#9CA2A0'
        },
        low:{
            value:low+'°C',
            //color:'#7CD47D'
        },
        high:{
            value:high+'°C',
            //color:'#AEC5C8'
        },
        love_date:{
            value:getLoveDays() + "天",
            //color:'#f92f60',
        },
        txt:{
            value:loveWord,
            //color:'#3C4244'
        },
        birthday:{
            value:dayOfBabyNextBirth() + "天",
            //color:'#3C4244'
        },
        my_birthday:{
            value:dayOfMyNextBirth() + "天",
        }
    }

    console.log(data)

    sendMsg({
        access_token,
        ...params,
        data
    }).then(res => {
        if (res.data && res.data.errcode){
            console.log("发送失败",res.data);
            return ;
        }
        console.log("发送成功 - 请在微信上查看对应消息");
    }).catch(err => {
        console.log("发送失败",err)
    })
}


//setInterval(() => {
    start();
//},2000)



