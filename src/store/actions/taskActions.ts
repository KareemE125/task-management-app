
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { API_BASE_URL } from "@/global/constants"
import ITask from "@/models/taskModel"
import { reduxActionAxiosWrapper } from "@/utils/apiHelpers"


export const getTasks = createAsyncThunk(
    "task/getTasks",
    reduxActionAxiosWrapper<ITask[]>(async () => {
        const response = await axios.get<ITask[]>(`${API_BASE_URL}/tasks`)
        console.log(response.data)
        return response.data
    })
)

export const createTask = createAsyncThunk(
    "task/createTask",
    reduxActionAxiosWrapper<ITask>(async (task) => {
        if(!task) throw new Error("task is required")
        const response = await axios.post<ITask>(`${API_BASE_URL}/tasks`, task)
        return response.data
    })
)

export const updateTask = createAsyncThunk(
    "task/updateTask",
    reduxActionAxiosWrapper<ITask>(async (newTask) => {
        if(!newTask) throw new Error("task is required")
        if(!(newTask as ITask).id) throw new Error("task id is required")
        const response = await axios.put<ITask>(`${API_BASE_URL}/tasks/${(newTask as ITask).id}`, newTask)
        return response.data
    })
)

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    reduxActionAxiosWrapper<number>(async (id) => {
        if(!id) throw new Error("id is required")
        if(typeof id !== "number") throw new Error("id must be a number")

        await axios.delete<number>(`${API_BASE_URL}/tasks/${id}`)
        return id as number
    })
)


