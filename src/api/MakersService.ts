import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IMaker } from '@/models/IMaker'

export const fetchMakers = createAsyncThunk<IMaker[]>(
    'makers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IMaker[]>(
                'http://localhost:3004/makers'
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(
                'Не удалось загрузить каталог товаров'
            )
        }
    }
)
