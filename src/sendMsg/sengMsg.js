const axios = require('axios');

const sendMsg = (params) => {
    const {access_token,touser,template_id,data = {}} = params;
    return axios.post(`https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${params.access_token}`,
        {
            touser,
            template_id,
            data,
        })
};

module.exports = {
    sendMsg
}
