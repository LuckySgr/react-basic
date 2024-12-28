// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 导入store
import store from './store'
// 使用react-redux中的Provider组件，将store传递给App组件
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
    /* 
        StrictMode的作用
            1. 严格模式，用于检测一些潜在的问题
                例如：检测过时的生命周期函数、过时的contextAPI、过时的refAPI等等
            2. 但是StrictMode只在开发模式下生效，
            3. 在生产模式下，StrictMode不会生效
        使用StrictMode严格模式，会导致App组件渲染两次，为了不受影响，暂时将其禁止
    */
    // <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </StrictMode>,
)
