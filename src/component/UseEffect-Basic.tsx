import { useEffect, useState } from "react";

/* 
    useEffect 基本使用
        1. useEffect函数是React中的一个Hook函数，可以在函数组件中执行副作用代码
        2. 副作用代码：修改DOM、异步请求、订阅等等
        需求：在组件渲染完毕之后，立刻从服务端获取数据，类似于Vue中的mounted生命周期函数
    语法：
        useEffect(() => {
            // 这里写副作用代码
            return () => {
                // 这里写清除副作用代码
            }
        }, [依赖项])
    说明：
        1. useEffect函数接收两个参数，第一个参数是一个函数，第二个参数是一个数组
        2. 第一个参数函数就是副作用函数，组件渲染完毕之后，会立刻执行这个函数
        3. 第二个参数数组是依赖项，当依赖项发生变化时，useEffect函数会重新执行
        4. useEffect函数可以写多个，每个useEffect函数都是独立的，互不影响
        5. useEffect函数可以返回一个函数，这个函数就是清除副作用函数，当组件销毁时，会执行这个函数
            注：清除副作用函数不是必须的，只有在副作用函数中存在订阅、定时器等需要手动清除的资源时，才需要返回清除副作用函数
                最常见的执行时机是在组件销毁时执行清除副作用函数，类似于Vue中的beforeDestroy生命周期函数
        6.useEffect副作用函数的执行时机存在多种情况，根据传入的依赖项不同，会有不同的执行表现：
            1.没有依赖项：组件初始化渲染时执行，组件更新时执行
            2.空数组：组件初始化渲染时执行
            3.添加特定依赖项：组件初始化渲染时执行，依赖项发生变化时执行
*/
const Child = () => {
    // 1.渲染时开启定时器
    useEffect(() => {
        console.log('开启定时器');
        const timer = setInterval(() => {
            console.log('定时器执行了');
        }, 1000);
        // 2.组件卸载时清除定时器
        return () => {
            console.log('清除定时器');
            clearInterval(timer);
        }
    }, []);
    return (
        <div>
            <h5>用来模拟组件卸载的Child组件</h5>
        </div>
    );
}
const UseEffectBasic = () => {
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [isShow, setIsShow] = useState(true);
    const url = 'http://geek.itheima.net/v1_0/channels';
    // 1. 没有依赖项 初始化渲染时执行，组件更新时执行
    useEffect(() => {
        console.log('useEffect函数执行了');
    });
    // 2. 空数组 初始化渲染时执行
    useEffect(() => {
        // 发送请求
        const getData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setList(data.data.channels);
        }
        getData();
    }, []);
    // 3. 添加特定依赖项(该案例中，count发生变化时，会执行useEffect函数)， 初始化渲染时执行，依赖项发生变化时执行
    useEffect(() => {
        console.log('count发生变化了');
    }, [count]);
    return (
        <div>
            <h1>{'------六、useEffect 基本使用 -----'}</h1>

            <h5>1.获取列表</h5>
            <ul>
                {
                    list.map((item: any) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>

            <h5>2.测试不同依赖项</h5>
            <button onClick={() => setCount(count + 1)}>+{count}</button>

            <h5>3.清除副作用函数</h5>
            {isShow && <Child />}
            <button onClick={() => setIsShow(!isShow)}>卸载Child组件</button>
        </div>
    );
}

export default UseEffectBasic;