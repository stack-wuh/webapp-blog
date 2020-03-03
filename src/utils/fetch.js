import Taro from '@tarojs/taro'

export default async function fetch (ops) {
    console.log('this is ops: ', ops)
    const {
        url,
        payload,
        method = 'GET',
        showToast = true
    } = ops
    const header = {}
    if (method === 'POST') { header['content-type'] = 'application/json' }

    return Taro.request({
        url,
        method,
        data: payload,
        header
    }).then(async (res) => {
        return res.data
    }).catch (async err => {
        const defaultMsg = '请求异常'
        if (showToast) {
            Taro.showToast({
                title: err && err.msg || defaultMsg,
                icon: 'none'
            })
        }
        return Promise.reject({ message: defaultMsg, ...err})
    })
}