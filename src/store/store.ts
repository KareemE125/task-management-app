import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

import taskReducer from "@/store/taskSlice"


const store = configureStore({
  reducer: {
    task: taskReducer
  }
})


// Create hooks for using the store as well the dispatch function

export type TRootState = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<TRootState>()

type TAppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>()


export default store
 