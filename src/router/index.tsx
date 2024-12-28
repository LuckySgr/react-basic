import App from "../App";
import ClickBasic from '../component/Click-Basic'
import CommBasic from '../component/Comm-Basic'
import GetDOMBasic from '../component/GetDOM-Basic'
import HookBasic from '../component/Hook-Basic'
import JSXBasic from '../component/JSX-Basic'
import ReduxBasic from '../component/Redux-Basic'
import UseEffectBasic from '../component/UseEffect-Basic'
import UseStateBasic from '../component/UseState-Basic'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/click',
        element: <ClickBasic />
    },
    {
        path: '/comm',
        element: <CommBasic />
    },
    {
        path: '/getdom',
        element: <GetDOMBasic />
    },
    {
        path: '/hook',
        element: <HookBasic />
    },
    {
        path: '/jsx',
        element: <JSXBasic />
    },
    {
        path: '/redux',
        element: <ReduxBasic />
    },
    {
        path: '/useeffect',
        element: <UseEffectBasic />
    },
    {
        path: '/usestate',
        element: <UseStateBasic />
    }
])

export default router;