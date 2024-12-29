import { useDispatch, useSelector } from "react-redux";

// 1.导入创建action对象的方法
import { increment, decrement, addToNumber } from "../store/modules/counterStore";
// 2.导入异步请求的方法
import { fetchChannelList } from "../store/modules/channelStore";
import { useEffect } from "react";

/* 
    Redux 基本使用
        1. 安装：npm install @reduxjs/toolkit react-redux
        2. 创建 store
        3. 创建 reducer
        4. 创建 action
        5. 创建 action type
        6. 创建组件
        7. 使用 connect 连接组件
        8. 使用 dispatch 分发 action
        9. 使用 useSelector 获取 store 中的数据
        10. 使用 useDispatch 获取 dispatch 函数

    React Toolkit(RTK): Redux Toolkit 是一个官方的、由 Redux 团队维护的工具包，用于简化 Redux 的使用
    react-redux: React 官方提供的一个库，用于在 React 中使用 Redux
        
    Redux 基本概念：
        1. store：保存数据的地方，整个应用只有一个 store
        2. state：store 中保存的数据，可以通过 store.getState() 获取
        3. action：动作，是一个对象，用来描述发生了什么事情，可以通过 store.dispatch(action) 分发 action
        4. reducer：是一个函数，接收两个参数：state 和 action，返回一个新的 state
        5. dispatch：分发 action，是 store 的一个方法，用来触发 reducer 函数，更新 state    
    
    Redux 相当于Vue中的Vuex，是一个状态管理工具，用于管理React中的状态

    在项目中的目录结构：
        1、通常集中状态管理的部分，会单独创建一个store目录。
        2、应用通常会有很多个子store模块，所以创建一个modules目录，用于存放子store模块。
        3、store中的入口文件，一般命名为index.ts。作用是组合modules目录中的子store模块，并导出store对象。
*/
const ReduxBasic = () => {
    // 从store中获取count
    const { count } = useSelector((state: any) => state.counter);
    const { channelList } = useSelector((state: any) => state.channel);
    // 2.使用useDispatch获取dispatch函数
    const dispatch: any = useDispatch();
    // 使用useEffect获取数据
    useEffect(() => {
        dispatch(fetchChannelList());
    }, [dispatch]);
    /* 
        修改count值步骤：
            1.导入创建action对象的方法
            2.使用useDispatch获取dispatch函数
            3.调用dispatch函数，分发action对象
    */
    return (
        <div>
            <h1>{'------七、Redux 基本使用 -----'}</h1>

            <h5>{'------1.同步操作 -----'}</h5>
            <button onClick={() => dispatch(increment())}>+</button>
            {count}
            <button onClick={() => dispatch(decrement())}>-</button>
            {/* 传参写法,参数会自动加到action.payload */}
            <button onClick={() => dispatch(addToNumber(10))}>add 10</button>

            <h5>{'------2.异步操作 -----'}</h5>
            <ul>
                {
                    channelList.map((item: any) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ReduxBasic;