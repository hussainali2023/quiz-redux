import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
 
export function QuizStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
 
 
  return (
    <div className="w-full py-4 px-8">
      <Stepper placeholder={""}
        activeStep={activeStep}
      >
        <Step placeholder={""} onClick={() => setActiveStep(0)} className=" w-fit px-8">Quiz List</Step>
        <Step placeholder={""} onClick={() => setActiveStep(1)} className=" w-fit px-8">Add Quiz</Step>
        
      </Stepper>
    </div>
  );
}