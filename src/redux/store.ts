import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice";
import stepperReducer from './features/stepper/stepperSlice'

export const store = configureStore({
    reducer:{
        quiz: quizReducer,
        stepper: stepperReducer

    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

