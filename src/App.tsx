import './App.css'
import AntdListBasic from './component/Antd-List-Basic'
import ClickBasic from './component/Click-Basic'
import CommBasic from './component/Comm-Basic'
import GetDOMBasic from './component/GetDOM-Basic'
import HookBasic from './component/Hook-Basic'
import JSXBasic from './component/JSX-Basic'
import ReduxBasic from './component/Redux-Basic'
import RouterBasic from './component/Router-Basic'
import UseEffectBasic from './component/UseEffect-Basic'
import UseStateBasic from './component/UseState-Basic'

const App = () => {
    return (
        <>
            <JSXBasic />
            <ClickBasic></ClickBasic>
            <UseStateBasic></UseStateBasic>
            <GetDOMBasic></GetDOMBasic>
            <CommBasic></CommBasic>
            <UseEffectBasic></UseEffectBasic>
            <HookBasic></HookBasic>
            <ReduxBasic></ReduxBasic>
            <RouterBasic></RouterBasic>
            <AntdListBasic></AntdListBasic>
        </>
    )
}

export default App
