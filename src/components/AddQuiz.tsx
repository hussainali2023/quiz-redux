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
          Sign Up
        </Typography>
        <Typography placeholder={""} color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-3">
              Your Name
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
            <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-3">
              Your Email
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
            <Typography placeholder={""} variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
            crossOrigin={""}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button placeholder={""} className="mt-6" fullWidth>
            sign up
          </Button>
        </form>
      </Card>
    );
  }