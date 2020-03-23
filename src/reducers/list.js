import { LIST_INFO, LIST_ITEM, lIST_BANNER } from '../constants/list'

const INITIAL_STORE = {
    data: [],
    info: {},
    banner: []
}

export default function list (state = INITIAL_STORE, action) {
    switch (action.type) {
        case LIST_INFO:{
            return { ...state, data: action.payload.data}
        }
        case LIST_ITEM: {
            return {
                ...state,
                info: action.payload.data[0] || {}
            }
        }
        case lIST_BANNER: {
            return {
                ...state,
                banner: action.payload.data
            }
        }
        default: return state
    }
}