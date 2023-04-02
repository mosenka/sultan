import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IProduct } from '@/models/IProduct'

export const fetchProductsList = createAsyncThunk<IProduct[]>(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>(
                'http://localhost:3004/products?_expand=makers'
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                'Не удалось загрузить каталог товаров'
            )
        }
    }
)
