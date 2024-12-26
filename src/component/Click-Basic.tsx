/* 
事件绑定
    1、基础绑定 
    2、事件参数e 
    3、传递自定义参数 
    4、传递自定义参数和事件参数e 
*/
const ClickBasic = () => {

    // 基础事件绑定
    const handleClick = () => {
        console.log('基础事件绑定');
    }

    // 事件参数e
    const handleClick1 = (e: any) => {
        console.log('事件参数e', e);
    }

    // 传递自定义参数
    const handleClick2 = (name: string) => {
        console.log('传递自定义参数', name);
    }

    // 传递自定义参数和事件参数e
    const handleClick3 = (name: string, e: any) => {
        console.log('传递自定义参数和事件参数e', name, e);
    }

    return (
        <div>
            <h1>{'------二、事件绑定-----'}</h1>

            {/* 1、基础绑定 */}
            <button onClick={handleClick}>基础事件绑定</button><br />

            {/* 2、事件参数e */}
            <button onClick={handleClick1}>事件参数e</button><br />

            {/* 3、传递自定义参数 */}
            <button onClick={() => handleClick2('React')}>传递自定义参数</button><br />

            {/* 4、传递自定义参数和事件参数e */}
            <button onClick={(e) => handleClick3('React', e)}>传递自定义参数和事件参数e</button><br />
        </div>
    )
}

export default ClickBasic