import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { QuizCard } from "./QuizCard";
import {AddQuiz} from "./AddQuiz"
import { QuizStepper } from "./Stepper";
 
export function TabsWithIcon() {
  const data = [
    {
      label: "Quiz List",
      value: "Quiz List",
      icon: Square3Stack3DIcon,
      desc: <QuizCard>Hello world</QuizCard>,
    },
    {
      label: "Add Quiz",
      value: "Add Quiz",
      icon: UserCircleIcon,
      desc:<QuizStepper/>
    },
  ];
  return (
    <Tabs value="Quiz List">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value, icon }) => (
          <Tab placeholder={""} key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}