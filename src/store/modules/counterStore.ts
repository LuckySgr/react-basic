import { createSlice } from "@reduxjs/toolkit";
// 同步操作
// 创建一个 counter 的 store
const counterStore = createSlice({
    name: 'counter',
    // 初始化状态
    initialState: {
        count: 0
    },
    // 修改状态的方法
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        addToNumber(state, action) {
            state.count += action.payload;
        }
    }
});
// 解构出来actionCreator函数
const { increment, decrement, addToNumber } = counterStore.actions;
// 获取reducer函数
const counterReducer = counterStore.reducer;

// 以按需导出的方式导出actionCreator函数
export { increment, decrement, addToNumber };
// 导出reducer函数
export default counterReducer;