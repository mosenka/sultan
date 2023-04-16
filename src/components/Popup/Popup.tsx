import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import styles from './popup.scss'

import { EColor, EIcons, Icon } from '@/ui'

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
    const fadeRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // if (!ref) return
        if (!isOpen) return
        if (ref.current == null || fadeRef.current == null) return

        function handleClick(event: MouseEvent): void {
            if (
                event.target instanceof Node &&
                (ref.current?.contains(event.target) == null ||
                    !ref.current?.contains(event.target)) &&
                fadeRef.current?.contains(event.target) != null &&
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

    const node = document.querySelector('#modal_root')
    if (node == null) return null

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
