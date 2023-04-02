import { MobButtonstPanel } from '@components/layout/navigation/MobButtonstPanel/MobButtonstPanel'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

import { Content } from './Content/Content'
import { Footer } from './Footer/Footer'
import { Header } from './header/Header'
import { Breadcrumbs } from './navigation/Breadcrumbs/Breadcrumbs'
import { Navbar } from './navigation/Navbar/Navbar'
import { TopLine } from './navigation/TopLine/TopLine'

import { ContainerFlex } from '@/ui'

interface ILayoutProps {
    children?: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <Header>
                <TopLine />
                <Navbar>
                    <MobButtonstPanel />
                </Navbar>
                <Breadcrumbs />
            </Header>
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </>
    )
}
