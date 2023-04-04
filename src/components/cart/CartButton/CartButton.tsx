import * as React from 'react'

import { Break, Button, EColor, EIcons, Icon, Text } from '@/ui'

interface ICartButtonProps {
    handlerClick: () => void
}

export const CartButton: React.FC<ICartButtonProps> = ({ handlerClick }) => {
    return (
        <Button size={'small'} handlerClick={handlerClick}>
            <Text
                size={10}
                weight={700}
                color={EColor.white}
                letterSpacing={'0.15em'}
                uppercase
            >
                В КОРЗИНУ
            </Text>
            <Break size={4} />
            <Icon icon={EIcons.basket} width={23} />
        </Button>
    )
}
