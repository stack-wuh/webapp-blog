import {
    API_lIST, API_LIST_ITEM, API_BANNER
} from '../constants/api'
import {
    LIST_INFO, LIST_ITEM, lIST_BANNER
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

export const dispatchBanner = () => createAction({
    type: lIST_BANNER,
    url: API_BANNER
})