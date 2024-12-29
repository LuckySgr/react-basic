import App from "../App";
import ClickBasic from '../component/Click-Basic';
import CommBasic from '../component/Comm-Basic';
import GetDOMBasic from '../component/GetDOM-Basic';
import HookBasic from '../component/Hook-Basic';
import JSXBasic from '../component/JSX-Basic';
import NotFound from "../component/NotFound";
import ReduxBasic from '../component/Redux-Basic';
import UseEffectBasic from '../component/UseEffect-Basic';
import UseStateBasic from '../component/UseState-Basic';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <JSXBasic />
            },
            {
                path: '/comm',
                element: <CommBasic />
            }
        ]
    },
    {
        path: '/click/:id/:name',
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
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;