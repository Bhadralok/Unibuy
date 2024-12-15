import { FcGoogle } from "react-icons/fc";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput.jsx";
import Input from "../UI/Input.jsx";
export default function CustomForm({
  heading = "Create an account",
  placeholder = "something",
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <form className="flex flex-col items-left gap-2 text-left justify-center h-full w-[23.125em]">
        <h1 className="font-bold">{heading}</h1>
        <p className="font-medium pb-7">Enter your details below</p>
        <div className="flex flex-col w-full gap-7 pb-7">
          <CustomInput placeholder="Name" type="form" text={true} />
          <CustomInput placeholder="Email or Phone Number" type="form" text={true} />
          <CustomInput placeholder="Password" type="form" text={false} />
        </div>
        <CustomButton size="large" type="primary">
          Create Account
        </CustomButton>
        <CustomButton size="large" type="accentOutline" icon1={<FcGoogle size={24} />}>Sign in to Google</CustomButton>
        <p className="text-center pt-4">Already have an account? {"  "} <span className="hover:underline cursor-pointer">Log in</span></p>
      </form>
    </div>
  );
}
