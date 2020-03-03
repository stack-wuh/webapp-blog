import { LIST_INFO, LIST_ITEM } from '../constants/list'

const INITIAL_STORE = {
    data: [],
    info: {}
}

export default function list (state = INITIAL_STORE, action) {
    switch (action.type) {
        case LIST_INFO:{
            return { ...state, data: action.payload.data}
        }
        case LIST_ITEM: {
            return {
                ...state,
                info: state.data.find(item => item.id === action.payload.id)
            }
        }
        default: return state
    }
}