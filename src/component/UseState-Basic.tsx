/* 
    useState（可以理解数据的双向绑定）
    1. 引入 useState
    2. 定义 count 和 setCount
    3. 使用 count 和 setCount

    count为状态值，setCount为更新状态值的方法

    状态修改规则：
        1. 不要直接修改状态值，直接修改不会重新渲染组件
        2. 使用 setCount 修改状态值
        3. setCount 会接收一个新的值，然后更新状态值
        4. setCount 会更新状态值，并且重新渲染组件
        5. useState 会返回一个数组，数组的第一个值为状态值，第二个值为更新状态值的方法
        
    可以理解为count是用来在页面上展示的，setCount是用来修改count的值的
*/

import { useState } from "react";

const UseStateBasic = () => {
    const [count, setCount] = useState(0);
    const [form, setForm] = useState({ name: 'React', age: 18 });

    const handleClick = () => {
        setForm({
            ...form,
            name: 'Vue'
        });
    }

    return (
        <div>
            <h1>{'------三、useState 基本使用-----'}</h1>

            {/* 计数器 */}
            <h5>{count}</h5>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            {/* 修改对象状态 */}
            <button onClick={handleClick}>修改对象状态---{form.name}</button>
        </div>
    );
}

export default UseStateBasic;