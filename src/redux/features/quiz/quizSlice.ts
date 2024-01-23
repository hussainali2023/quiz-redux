import { createSlice } from "@reduxjs/toolkit"

type TQiz =
 {
        module:"",
        question:"",
        description:"",
        options: [],
        correctOptions: []
    }


type TInitialState = {
    quiz: TQiz[]
}

type TAction = {
    payload:TQiz[];
}

const initialState = {
    quiz:[] 

}

const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        addQuiz: (state, action:TAction) => {
            state.quiz.push(action.payload)
        }
    }
})


export const {addQuiz} = quizSlice.actions;


export default quizSlice.reducer;