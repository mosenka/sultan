import * as React from 'react'

import { useEffect, useRef, useState } from 'react'

import { Break, EColor, EIcons, Icon, Text } from '@/ui'
import styles from './dropdown.scss'

interface IDropdownProps {
    children: React.ReactNode
    title: string
    selectedItem?: string
}

export const Dropdown: React.FC<IDropdownProps> = ({
    children,
    title,
    selectedItem = 'Название',
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        function handleClick(event: MouseEvent): void {
            if (
                event.target instanceof Node &&
                !(ref.current?.contains(event.target) ?? false)
            ) {
                if (buttonRef.current?.contains(event.target) ?? true) return
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className={styles.wrapper}>
            <button
                type={'button'}
                className={styles.head}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={() => setIsOpen(!isOpen)}
                ref={buttonRef}
            >
                <Text size={16} weight={500}>
                    {title}
                </Text>
                <Break size={4} />
                <Text size={16} color={EColor.fiord}>
                    {selectedItem}
                </Text>
                <Break size={4} />
                <Icon icon={EIcons.arrowFull} width={5} fill={EColor.fiord} />
            </button>
            <div
                ref={ref}
                className={styles.list}
                hidden={!isOpen}
                onClick={() => setIsOpen(false)}
            >
                {children}
            </div>
        </div>
    )
}
