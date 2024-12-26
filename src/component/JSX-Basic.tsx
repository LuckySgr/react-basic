/* 
JSX 基础
    1、使用引号传递字符串
    2、使用JavaScript变量
    3、函数调用和方法调用
    4、使用JavaScript对象
    5、渲染列表(map 方法)
    6、基础条件渲染（逻辑与&&或者三目运算符）
    7、复杂条件渲染（自定义函数 + 判断）
*/
let count: number = 123
const flag: boolean = false;
// 定义类型
const articleType: number = 1 // 0 1 2
const list: { id: number; name: string; }[] = [
    { id: 1, name: 'Vue' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Java' }
]

const getName = () => {
    return '学习React';
}

// 自定义函数（根据类型不同返回不同结果）
const getArticleTem = () => {
    switch (articleType) {
        case 0:
            return <h5>学习React</h5>
        case 1:
            return <h5>学习Vue</h5>
        case 2:
            return <h5>学习Java</h5>
        default:
            return <h5>学习React</h5>
    }
}

const JSXBasic = () => {
    return (
        <div>
            <h1>{'------一、使用引号传递字符串-----'}</h1>

            <h5>
                {'学习JSX基础语法'}
            </h5>

            {/* 2、使用JavaScript变量 */}
            <h5>
                {count}
            </h5>

            {/* 3、函数调用和方法调用 */}
            <h5>
                {getName()}
            </h5>
            <h5>
                {new Date().getDate()}
            </h5>

            {/* 4、使用JavaScript对象 */}
            <h5 style={{ color: 'red' }}>
                学习React
            </h5>

            {/* 5、渲染列表 */}
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>

            {/* 6、基础条件渲染 */}
            {flag && <h5>学习JSX基础语法</h5>}
            {flag ? <h5>学习JSX基础语法</h5> : <h5>学习React</h5>}
            {/* 或者 */}
            <h5>{flag ? '学习JSX基础语法' : '学习React'}</h5>

            {/* 7、复杂条件渲染 */}
            {getArticleTem()}
        </div>
    )
}

export default JSXBasic;