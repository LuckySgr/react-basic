import { useState } from "react";

/* 
    自定义Hook函数
        1. 自定义Hook函数是一个函数，名称以use开头，函数内部可以调用其他的Hook函数
        2. 自定义Hook函数可以接收参数，返回值是一个数组或者对象
        3. 自定义Hook函数的作用是用来复用状态逻辑
        4. 自定义Hook函数的命名规范：useXXX
    使用规则：
        1. 自定义Hook函数只能在组件或者其他自定义的Hook函数中调用
        2.只能在组件的顶层调用Hook函数，不能在循环、条件判断、嵌套函数中调用
    需求：自定义一个Hook函数，用来控制元素的显示和隐藏
*/
const useToggle = (initValue: boolean): [boolean, () => void] => {
    const [value, setValue] = useState(initValue);
    const toggle = () => {
        setValue(!value);
    }
    return [value, toggle];
}
const HookBasic = () => {
    const [isShow, toggle] = useToggle(true);
    return (
        <div>
            <h1>{'------六、Hook 基本使用 -----'}</h1>

            <h5>{'1、自定义Hook函数'}</h5>
            {isShow && <h5>自定义Hook函数</h5>}
            <button onClick={toggle}>显示/隐藏</button>
        </div>
    )
}

export default HookBasic;