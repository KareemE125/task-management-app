import axios from "axios"
import { AsyncThunkConfig, GetThunkAPI } from "node_modules/@reduxjs/toolkit/dist/createAsyncThunk"
import { APP_DEFAULT_CACHE } from "@/global/constants"


export const cacheInvalidationCheck = (lastFetch: number | null, cacheTime: number = APP_DEFAULT_CACHE) => {
    if(!lastFetch) return true
    const currentTime = Date.now()
    return (currentTime - lastFetch) > cacheTime
}

export const reduxActionAxiosWrapper = <T>(apiCallFunction: (arg: unknown) => Promise<T>) => {
    return async (arg: unknown, thunkAPI: GetThunkAPI<AsyncThunkConfig>) => {
        const { rejectWithValue } = thunkAPI
        try{
            return apiCallFunction(arg)
        }
        catch(err){
            if(axios.isAxiosError(err)){
                return rejectWithValue(err.response?.data.message || err.message)
            }
            else{
                return rejectWithValue("unexpected error occurred")
            }
        }
    }
}