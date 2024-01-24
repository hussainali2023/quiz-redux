import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type TQuiz =
 {
        module:" ",
        question:" ",
        description:" ",
        options: [ ],
        correctOptions: [ ]
    }


type TInitialState = {
    quiz: TQuiz[]
}

type TAction = {
    payload:TQuiz[];
}

const initialState: TInitialState = {
    quiz:[] 

}

const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        addQuiz: (state, action: TAction) => {
            state.quiz.push(action.payload)
        }
    }
})


export const {addQuiz} = quizSlice.actions;


export default quizSlice.reducer;