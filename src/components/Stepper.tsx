import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setActiveStepper } from "../redux/features/stepper/stepperSlice";

type TStepperProps = {
  steps: {
    value: Number,
    name:String,
    component: React.ReactNode
  }[]
}

export function QuizStepper({steps}: TStepperProps) {
 const {activeStep} = useAppSelector((state) => state.stepper)
 const dispatch = useAppDispatch()
 
 
  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""}
        activeStep={activeStep}
      >
        {/* <Step placeholder={""} onClick={() => dispatch(setActiveStepper(0))} className=" w-fit px-8">Quiz List</Step>
        <Step placeholder={""} onClick={() => dispatch(setActiveStepper(1))} className=" w-fit px-8">Add Quiz</Step>
         */}
{
  steps.map((step) => (
    <Step placeholder={""} onClick={() => dispatch(setActiveStepper(step.value))} className=" w-fit px-8">{step.name}</Step>
  ) )
}

      </Stepper>
      <div>
       
      </div>
    </div>
  );
}