import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { ICategory } from '@/models/ICategory'

export const fetchCategories = createAsyncThunk<ICategory[]>(
    'сategories/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ICategory[]>(
                'http://localhost:3004/categories'
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                'Не удалось загрузить каталог товаров'
            )
        }
    }
)
