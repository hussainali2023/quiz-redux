import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function AddQuiz() {
    return (
       <Card placeholder={""} color="transparent" shadow={false}>
        <Typography placeholder={""} variant="h4" color="blue-gray">
          Add Quiz
        </Typography>
        <Typography placeholder={""} color="gray" className="mt-1 font-normal">
          Please Add Your Quiz
        </Typography>
        <form className=" mt-8 mb-2 w-full">
          <div className=" -mb-1 gap-6 grid grid-cols-2">
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Question
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Descriptions
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 1
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 2
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Option 3
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
             Option 4
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
           <div>
           <Typography placeholder={""} variant="h6" color="blue-gray" className="mb-3">
              Correct Option
            </Typography>
            <Input
            crossOrigin={""}
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
           </div>
          </div>
          <Button placeholder={""} className="mt-6" fullWidth>
            Add Quiz
          </Button>
        </form>
      </Card>
    );
  }