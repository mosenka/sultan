import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { IMaker } from '@/models/IMaker'

export const fetchMakers = createAsyncThunk<IMaker[]>(
    'makers/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IMaker[]>(
                'http://localhost:3004/makers'
            )

            return response.data
        } catch (err) {
            const errors = err as AxiosError
            console.log(errors)
            if (!errors.response) {
                throw err
            }

            return thunkAPI.rejectWithValue('ошибка на сервере')
        }
    }
)
