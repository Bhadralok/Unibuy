import CustomForm from "../forms/CustomForm.jsx";
import SignUpIllustration from "../Components/SignUpIllustration.jsx";
import CustomInput from "../UI/CustomInput.jsx";
export default function SignUp() {
  return (
    <div className="w-screen p-0 m-0">
      <div className="flex w-screen overflow-hidden py-10">
        <div className="h-[50vw] overflow-hidden w-[50vw]">
          <SignUpIllustration />
        </div>
        <div className="w-[50vw]">
          <CustomForm inputNumber={3} placeholder="somesome"/>
        </div>
      </div>
    </div>
  );
}
