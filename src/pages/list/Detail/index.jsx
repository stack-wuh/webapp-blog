import Taro, { useEffect, useRouter } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, RichText } from '@tarojs/components'
import * as actions from '../../../actions/list'
import PageLoading from '../../../components/pageLoading'

const ItemDetail = ({ dispatchListById, dispatch, info }) => {
    const router = useRouter()
    useEffect(() => {
        dispatch(dispatchListById({id: router.params.id}))
    }, [])
    if (!info) {
        return (<PageLoading />)
    }
    return (<View>
        <RichText  text={info.content} />
        <RichText htmlElement={info.content} />
    </View>)
}

const mapStateToProps = state => ({ ...state.list})
const mapDispatchToProps = (dispatch) => ({...actions, dispatch})
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)