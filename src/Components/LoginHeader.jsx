import Logo from "../UI/Logo";
import CustomNavBar from "../UI/CustomNavBar";
import CustomInput from "../UI/CustomInput";
import { RiSearchLine } from "react-icons/ri";
export default function Header() {
  return (
    <>
      <div className="bg-black w-full h-5"></div>
      <div className="h-fit flex justify-between w-full items-center 2xl:px-32 xl:px-16 border-b-2 border-gray">
        <Logo />
        <div className="flex gap-10 font-semibold items-center">
          <CustomNavBar to="/">Home</CustomNavBar>
          <CustomNavBar to="">Contact</CustomNavBar>
          <CustomNavBar to="">About</CustomNavBar>
          <CustomNavBar to="/signup">Sign Up</CustomNavBar>
        </div>
        <div className="flex items-center gap-6">
          <CustomInput
            placeholder="What are you looking for?"
            text={true}
            type="login"
            icon={<RiSearchLine size={24} />}
          />
        </div>
      </div>
    </>
  );
}
