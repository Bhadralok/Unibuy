import CustomForm from "../forms/CustomForm";
import SignUpIllustration from "../Components/SignUpIllustration.jsx";

export default function SignIn() {
  return (
    <div className="w-screen p-0 m-0">
      <div className="flex w-screen overflow-hidden py-10">
        <div className="h-[50vw] overflow-hidden w-[50vw]">
          <SignUpIllustration />
        </div>
        <div className="w-[50vw]">
          <CustomForm
            inputNumber={3}
            placeholder1="Email or Phone Number"
            placeholder2="Password"
            heading="Log in to Unibuy"
            input={false}
            button="Log in"
            forgotPassword={true}
          />
        </div>
      </div>
    </div>
  );
}
