// 异步操作

/* 
    步骤:
        1.创建store的写法保持不变,配置好同步修改状态的方法.
        2.单独封装一个函数,在函数内部return一个新函数,在新函数中
            1.封装异步请求获取数据.
            2.调用同步actionCreator传入异步数据生成一个action对象.并使用dispatch分发.
        3.组件中dispatch的写法保持不变.
*/

import { createSlice } from "@reduxjs/toolkit";

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannelList(state, action) {
            state.channelList = action.payload;
        }
    }
});
// 异步请求部分
const { setChannelList } = channelStore.actions;
const fetchChannelList = () => {
    return async (dispatch: any) => {
        const res = await fetch('http://geek.itheima.net/v1_0/channels');
        const data = await res.json();
        dispatch(setChannelList(data.data.channels));
    };
}
// 导出异步请求的方法
export { fetchChannelList };

const channelReducer = channelStore.reducer;
export default channelReducer;