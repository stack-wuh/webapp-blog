module.exports = function days (str, spactor = '-') {
    const format = (val) => val.toString()[1] ? val : '0'+val
    const actions = {
        year: 'getFullYear',
        month: 'getMonth',
        date: 'getDate',
        hours: 'getHours',
        minutes: 'getMinutes',
        seconds: 'getSeconds'
    }
    const date = new Date(str)
    const _date = {}
    Object.keys(actions).forEach(v => {
        _date[v] = format(date[actions[v]]())
    })
    return {
        ..._date,
        string: `${_date.year}${spactor}${_date.month}${spactor}${_date.date} ${_date.hours}:${_date.minutes}:${_date.seconds}`
    }
}