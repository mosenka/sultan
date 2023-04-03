import { useAppSelector } from '@/hooks'
import { IProduct } from '@/models'
import {
    AdminPage,
    CartPage,
    CatalogPage,
    LoginPage,
    ProductPage,
} from '@/pages'
import { DotsSeparator } from '@/ui'
import { logo } from '@assets/icons'
import { useProductLoader } from '@hooks/useProductLoader'
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
                        loader: async ({ request, params }) => {
                            try {
                                const response = await axios.get<IProduct>(
                                    `http://localhost:3004/products/${params.id}?_expand=makers`
                                )

                                return response.data.name
                            } catch (error) {
                                return error
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
