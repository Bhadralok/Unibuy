import { FcGoogle } from "react-icons/fc";
import CustomButton from "../UI/CustomButton.jsx";
import CustomInput from "../UI/CustomInput.jsx";
import Input from "../UI/Input.jsx";
import CustomNavBar from "../UI/CustomNavBar.jsx";
export default function CustomForm({
  heading = "Create an account",
  placeholder1 = "something",
  placeholder2 = "something",
  placeholder3 = "Password",
  input = true,
  message,
  linkTag,
  button = "Create Account",
  login = false,
  forgotPassword = false,
}) {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <form className="flex flex-col items-left gap-2 text-left justify-center h-full w-[23.125em]">
        <h1 className="font-bold">{heading}</h1>
        <p className="font-medium pb-7">Enter your details below</p>
        <div className="flex flex-col w-full gap-7 pb-7">
          <CustomInput placeholder={placeholder1} type="form" text={true} />
          {input && (
            <CustomInput placeholder={placeholder2} type="form" text={true} />
          )}
          <div className="flex flex-col gap-2">
            <CustomInput placeholder={placeholder3} type="form" text={false} />
            {forgotPassword && (
              <CustomNavBar color="text-red-500" to="/">
                Forgot Password?
              </CustomNavBar>
            )}
          </div>
        </div>
        <CustomButton size="large" type="primary">
          {button}
        </CustomButton>
        <CustomButton
          size="large"
          type="accentOutline"
          icon1={<FcGoogle size={24} />}
        >
          Sign in to Google
        </CustomButton>
        {message && (
          <p className="text-center pt-4">
            {message}
            {"   "}
            <CustomNavBar to="/signin">{linkTag}</CustomNavBar>
          </p>
        )}
      </form>
    </div>
  );
}
