import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IUser } from '@/models'

interface FieldsState {
    login: string
    password: string
}

interface ILogin extends IUser {
    isAuth: boolean
}

export const login = createAsyncThunk<boolean, FieldsState>(
    'login/fetchAll',
    async ({ login, password }, thunkAPI) => {
        try {
            const response = await axios.get<IUser>(
                `http://localhost:3004/login`
            )
            if (
                response.data.login === login &&
                response.data.password === password
            ) {
                localStorage.setItem('user', JSON.stringify(response.data))
                return true
            }
            return false
        } catch (error) {
            return thunkAPI.rejectWithValue('Не удалось автоизоваться')
        }
    }
)
