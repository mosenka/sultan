import {
    AdminPage,
    CartPage,
    CatalogPage,
    LoginPage,
    ProductPage,
} from '@/pages'
import { DotsSeparator } from '@/ui'
import axios from 'axios'
import { createBrowserRouter, Link } from 'react-router-dom'
import { Layout } from '@/components'
import React from 'react'

interface IHandle {
    crumb: () => JSX.Element
}

export const publicRoutes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: CatalogPage,
            },
            {
                path: 'product',
                handle: {
                    crumb: () => (
                        <>
                            <Link to={'product'}>Каталог</Link>
                        </>
                    ),
                } as IHandle,
                children: [
                    {
                        index: true,
                        Component: CatalogPage,
                    },
                    {
                        path: ':id',
                        Component: ProductPage,
                        handle: {
                            crumb: () => (
                                <>
                                    <Link to={'product'}>Продукт</Link>
                                </>
                            ),
                        },
                    },
                ],
            },
            {
                path: 'cart',
                Component: CartPage,
                handle: {
                    crumb: () => <Link to={'/cart'}>Корзина</Link>,
                },
            },
            {
                path: 'admin',
                Component: AdminPage,
                handle: {
                    crumb: () => <Link to={'/admin'}>Админ панель</Link>,
                },
            },
            {
                path: 'login',
                Component: LoginPage,
                handle: {
                    crumb: () => <Link to={'/admin'}>Авторизация</Link>,
                },
            },
        ],
    },
])
