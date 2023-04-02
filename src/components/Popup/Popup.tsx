import { Card, EColor, EIcons, Icon } from '@/ui'
import { useEffect, useRef } from 'react'
import * as React from 'react'
import { createPortal } from 'react-dom'
import styles from './popup.scss'

interface IPopupProps {
    children?: React.ReactNode
    isOpen: boolean
    closePopup: () => void
}

export const Popup: React.FC<IPopupProps> = ({
    children,
    isOpen,
    closePopup,
}) => {
    const node = document.querySelector('#modal_root')
    if (!node) return null

    const ref = useRef<HTMLDivElement>(null)
    const fadeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref) return
        if (!isOpen) return

        function handleClick(event: MouseEvent) {
            if (
                event.target instanceof Node &&
                !ref.current?.contains(event.target) &&
                fadeRef.current?.contains(event.target)
            ) {
                closePopup()
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return isOpen ? (
        createPortal(
            <div className={styles.modal} ref={fadeRef}>
                <div className={styles.content} ref={ref}>
                    {children}
                    <div className={styles.close} onClick={closePopup}>
                        <Icon
                            icon={EIcons.close}
                            width={12}
                            fill={EColor.gold}
                        />
                    </div>
                </div>
            </div>,
            node
        )
    ) : (
        <></>
    )
}
