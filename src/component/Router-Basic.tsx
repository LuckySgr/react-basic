import { Link, Outlet, useNavigate } from "react-router-dom";

/* 
    路由跳转:
        1. 声明式导航:使用 Link 组件跳转,后台管理系统的左侧菜单栏通常使用这种方式
        2. 编程式导航:使用 useNavigate 钩子跳转,适用于按钮点击跳转等场景
    路由传参:
        1. searchParams传参
        2. params传参
    嵌套路由:
        1.在根路由下使用children属性配置路由嵌套关系。
        2.使用 Outlet 组件配置二级路由的渲染位置。
    默认显示二级路由:
        只要在二级路由位置去掉path,设置index属性为true即可（多级路由同理）
    404路由：
        1.准备一个404页面组件。
        2.在路由表数组末尾，以*号作为路由path配置路由。
        3.当路由匹配不到时，自动跳转到404页面。
    路由模式：
        1.路由模式有两种：history模式和hash模式，分别由createBrowserRouter和createHashRouter组件提供。
        2.url中的#号就是hash模式。
        3.底层实现原理：history模式是通过history 对象 + pushState 事件实现的，hash模式是通过监听 hashchange 事件实现的。
        4.默认是history模式，如果需要使用hash模式，在路由配置中使用createHashRouter组件替换createBrowserRouter即可。
        5.在history模式下，需要后端配合，否则会出现刷新404问题。
*/
const RouterBasic = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>{'------八、路由 -----'}</h1>

            <h3>{'------一、路由跳转 -----'}</h3>

            <h5>1.声明式导航</h5>
            <Link to="/jsx">JSX 基础</Link>

            <h5>2.编程式导航</h5>
            <button onClick={() => navigate('/click')}>事件绑定</button>

            <h3>{'------二、路由传参 -----'}</h3>
            {/* 以编程式导航为例, 声明式导航传参方式一样 */}
            {/* 接收参数需要去目标组件接收 */}
            <button onClick={() => navigate('/jsx?id=1001&name=react')}>searchParams传参</button>
            {/* 该方法需要在router上写上占位符 */}
            <button onClick={() => navigate('/click/1001/react')}>params传参</button>

            <h3>{'------三、嵌套路由 -----'}</h3>
            {/* 默认显示JSX 基础，首次进入不用点击即可显示 */}
            <Link to="/">JSX 基础</Link>
            <Link to="/comm">Comm 基础</Link>
            {/* 标注组件渲染位置 */}
            <Outlet />
        </div>
    );
}

export default RouterBasic;
