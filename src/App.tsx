import './App.css'
import ClickBasic from './component/Click-Basic'
import CommBasic from './component/Comm-Basic'
import GetDOMBasic from './component/GetDOM-Basic'
import JSXBasic from './component/JSX-Basic'
import UseEffectBasic from './component/UseEffect-Basic'
import UseStateBasic from './component/UseState-Basic'

function App() {
    return (
        <>
            <JSXBasic />
            <ClickBasic></ClickBasic>
            <UseStateBasic></UseStateBasic>
            <GetDOMBasic></GetDOMBasic>
            <CommBasic></CommBasic>
            <UseEffectBasic></UseEffectBasic>
        </>
    )
}

export default App
