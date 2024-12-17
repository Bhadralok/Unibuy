import CustomForm from "../forms/CustomForm.jsx";
import SignUpIllustration from "../Components/SignUpIllustration.jsx";

export default function SignUp() {
  return (
    <div className="w-screen p-0 m-0">
      <div className="flex w-screen overflow-hidden py-10">
        <div className="h-[50vw] overflow-hidden w-[50vw]">
          <SignUpIllustration />
        </div>
        <div className="w-[50vw]">
          <CustomForm
            inputNumber={3}
            placeholder="somesome"
            message="Already have an account?"
            linkTag="Log in"
            placeholder1="Name"
            placeholder2="Email or Phone Number"
            
          />
        </div>
      </div>
    </div>
  );
}
