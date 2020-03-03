import fetch from './fetch'

function createAction (options) {
    const {
        url,
        method,
        payload,
        fetchOptions,
        cb,
        type
    } = options
    return dispatch => {
        return fetch({url, method, payload, ...fetchOptions})
                    .then(res => {
                        dispatch({ type, payload: cb ? cb(res) : res})
                        return res
                    })
    }
}

export {
    // eslint-disable-next-line import/prefer-default-export
    createAction
}