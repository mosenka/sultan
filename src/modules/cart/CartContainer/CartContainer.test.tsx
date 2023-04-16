import { CartContainer } from '@/modules'
import { setupStore } from '@store/store'
import { render, screen } from '@testing-library/react'
import * as reduxHooks from '@/hooks'
import { Provider } from 'react-redux'

jest.mock('react-redux')
const useDispatchMock = jest.spyOn(reduxHooks, 'useAppDispatch')

describe('Cart Container', () => {
    const useSelectorMock = jest.spyOn(reduxHooks, 'useAppSelector')
    const useDispatchMock = jest.spyOn(reduxHooks, 'useAppDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    })

    test('is empty Cart', () => {
        useSelectorMock.mockReturnValue({
            cartProductList: [],
            totalSum: 0,
            totalCount: 0,
        })

        const component = render(<CartContainer />)

        expect(screen.getByTestId('empty-cart')).toBeInTheDocument()

        expect(component).toMatchSnapshot()
    })
})
