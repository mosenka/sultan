import axios from 'axios'

import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'

import { Layout } from '@/components'
import { IProduct } from '@/models'
import {
    AdminPage,
    CartPage,
    CatalogPage,
    LoginPage,
    ProductPage,
} from '@/pages'

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
                },
                children: [
                    {
                        index: true,
                        Component: CatalogPage,
                    },
                    {
                        path: ':id',
                        Component: ProductPage,
                        loader: async ({ request, params }) => {
                            try {
                                if (params.id?.length === 0) return
                                const response = await axios.get<IProduct>(
                                    `http://localhost:3004/products/${params?.id}?_expand=makers`
                                )

                                return response.data.name
                            } catch (error) {
                                return error as string
                            }
                        },
                        handle: {
                            crumb: (data: string) => (
                                <>
                                    <span>{data}</span>
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
