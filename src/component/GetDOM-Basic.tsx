import { useRef } from "react";

/* 
    React 中获取 DOM
    React 为了性能优化，会对 DOM 进行缓存，所以在 React 中获取 DOM 元素并不是那么容易。
    但是我们可以通过 ref 来获取 DOM 元素。
    1. useRef 创建 ref 对象,绑定到元素上
    2. DOM可用时，通过 ref.current 获取元素
*/
const GetDOMBasic = () => {

    const inputRef = useRef(null);

    const showDOM = () => {
        if (inputRef.current) {
            console.log(inputRef.current);
            console.dir(inputRef.current);
        }
    }
    
    return (
        <div>
            <h1>{'------四、React 中获取 DOM -----'}</h1>
            <input type="text" ref={inputRef} />
            <button onClick={showDOM}>获取DOM</button>
        </div>
    );
}

export default GetDOMBasic;