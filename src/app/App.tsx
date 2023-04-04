import * as React from 'react'
import './styles/main.global.scss'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { publicRoutes } from '@/app/router'
import { setupStore } from '@/store/store'

const store = setupStore()

export const App: React.FC = () => {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={publicRoutes} />
            </Provider>
        </>
    )
}
