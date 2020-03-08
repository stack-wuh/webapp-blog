import {
    API_lIST, API_LIST_ITEM
} from '../constants/api'
import {
    LIST_INFO, LIST_ITEM
} from '../constants/list'
import { createAction } from '../utils/redux'

// eslint-disable-next-line import/prefer-default-export
export const dispatchList = payload => createAction({
    type: LIST_INFO,
    url: API_lIST,
    payload
})

export const dispatchListById = payload => createAction({
    type: LIST_ITEM,
    url: API_LIST_ITEM,
    payload
})