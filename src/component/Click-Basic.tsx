/* 
事件绑定
    1、基础绑定 
    2、事件参数e 
    3、传递自定义参数 
    4、传递自定义参数和事件参数e 
*/

// 基础事件绑定
function handleClick() {
    console.log('基础事件绑定');
}

// 事件参数e
function handleClick1(e: any) {
    console.log('事件参数e', e);
}

// 传递自定义参数
function handleClick2(name: string) {
    console.log('传递自定义参数', name);
}

// 传递自定义参数和事件参数e
function handleClick3(name: string, e: any) {
    console.log('传递自定义参数和事件参数e', name, e);
}

function ClickBasic() {
    return (
        <>
            {/* 1、基础绑定 */}
            <button onClick={handleClick}>基础事件绑定</button><br />

            {/* 2、事件参数e */}
            <button onClick={handleClick1}>事件参数e</button><br />

            {/* 3、传递自定义参数 */}
            <button onClick={() => handleClick2('React')}>传递自定义参数</button><br />

            {/* 4、传递自定义参数和事件参数e */}
            <button onClick={(e) => handleClick3('React', e)}>传递自定义参数和事件参数e</button><br />
        </>
    )
}

export default ClickBasic