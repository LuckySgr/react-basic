/* 
    组件通信
    1. 父子组件通信
    2. 兄弟组件通信
    3. 跨层组件通信


*/

import { createContext, useContext, useState } from "react";

// 子组件
const Child = (props: any) => {
    // props: 对象包含父组件传递过来的所有数据, props可以包含任意类型的数据
    const message = '这是子组件数据' // 子组件内部数据
    console.log(props);

    return (
        <div>
            <h5>{'子组件,' + props.data + ',子组件内部数据：'} {props.children}</h5>
            <button onClick={() => props.onGetChildData(message)}>{'子组件按钮'}</button>
        </div>
    )
}

// A组件
const A = (props: any) => {
    const message = '这是A组件数据'
    return (
        <div>
            <h5>{'A组件'}</h5>
            <button onClick={() => props.onGetAData(message)}>{'A组件按钮'}</button>
        </div>
    )
}

// B组件
const B = (props: any) => {
    return (
        <div>
            <h5>{'B组件'}</h5>
            <h5>{'B组件接收到的数据：' + props.data}</h5>
        </div>
    )
}

// C组件
const C = () => {
    return (
        <div>
            <h5>{'C组件'}</h5>
            <D></D>
        </div>
    )
}

// D组件
const D = () => {
    const data = useContext(AppContext)
    return (
        <div>
            <h5>{'D组件--------' + data}</h5>
        </div>
    )
}

const AppContext = createContext<string | null>(null)

// 父组件
const CommBasic = () => {
    const data = '父组件数据'
    const [mes, setMes] = useState('')
    const [aData, setAData] = useState('')
    const getData = (data: string) => {
        console.log(data);
        setMes(data)
    }
    // A组件传递过来的数据
    const getACommData = (data: string) => {
        console.log(data);
        setAData(data)
    }
    return (
        <div>
            <h1>{'------五、组件通信 -----'}</h1>

            <h5>{'1. 父子组件通信'}</h5>
            {/* 
                父传子:
                    1、父组件传递数据，子组件标签身上绑定属性
                    2、子组件通过props接收父组件传递的数据
                子传父:
                    1、父组件定义一个函数，通过属性的方式传递给子组件
                    2、子组件调用父组件传递过来的函数，并且把数据当做参数传递
                    核心思路：在子组件中调用父组件中的函数并传递实参
            */}
            {mes}
            <Child data={data} onGetChildData={getData}>
                {/* 在子组件标签内部写的东西也会自动传过去, 会自动放到对象children中 */}
                <span>{'子组件内部数据'}</span>
            </Child>

            <h5>{'2. 兄弟组件通信'}</h5>
            {/* 
                实现方式：
                    1. 状态提升
                        实现思路：通过父组件进行兄弟组件之间的数据传递
                            1、A组件先通过子传父的方式把数据传递给父组件
                            2、父组件再通过父传子的方式把数据传递给B组件
                    2. 使用第三方库
            */}
            <A onGetAData={getACommData}></A>
            <B data={aData}></B>

            <h5>{'3. 跨层组件通信'}</h5>
            {/* 
                实现方式：
                    1. 使用Context
                        实现思路：通过Context上下文对象实现跨层级组件之间的数据传递
                            1、使用createContext创建上下文对象Ctx
                            2、在顶层组件中通过Ctx.Provider提供数据
                            3、在任意组件中通过useContext钩子函数获取消费数据
                        注：顶层和底层是相对的概念，在父子组件中也可以使用Context通信
                    2. 使用第三方库
            */}

            {/* 
                嵌套关系：App ---> C ---> D  
                该案例要将App组件的信息直接传递给D，只是简单举例，App与D组件之间可能有N个其他组件
            */}
            <AppContext.Provider value={data}>
                <C></C>
            </AppContext.Provider>
        </div>
    )
}

export default CommBasic;