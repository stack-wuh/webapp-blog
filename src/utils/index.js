/**
 * 节流函数，将动作按时间片段分段执行
 * @param {*} cb 执行回调函数
 * @param {*} delay 延时执行的毫秒数 ms
 */
function throttle (cb, delay = 500) {
    let last;
    let timer;

    return function () {
        const context = this
        const args = arguments
        let now = +new Date()

        if (last && now < last + delay) {
            clearTimeout(timer)

            timer = setTimeout(() => {
                last = now
                cb.apply(context, args)
            }, delay)
        } else {
            last = now
            cb.apply(context, args)
        }
    }
}

/**
 * 防抖函数, 动作结束之后执行
 * @param {*} cb 
 * @param {*} delay 
 */
function debounce (cb, delay) {
    let timer;
    return function () {
        const context = this
        const args = arguments
        clearTimeout(timer)
        
        timer = setTimeout(()=> {
            cb.apply(context, args)
        }, delay)
    }
}

export {
    throttle,
    debounce
}