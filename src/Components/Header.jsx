import Logo from "../UI/Logo";
import CustomNavBar from "../UI/CustomNavBar";
import CustomInput from "../UI/CustomInput";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
export default function Header({ isLoginPage }) {
  return (
    <>
      <div className="bg-black w-screen h-5"></div>
      <div className="h-fit flex justify-between px-32">
        <Logo />
        <div className="flex gap-10 font-semibold items-center">
          <CustomNavBar to="/">Home</CustomNavBar>
          <CustomNavBar to="/contact">Contact</CustomNavBar>
          <CustomNavBar to="">About</CustomNavBar>
          <CustomNavBar to="/signup">Sign Up</CustomNavBar>
        </div>
        <div className="flex items-center gap-6">
          <CustomInput
            placeholder="What are you looking for?"
            icon={<RiSearchLine size={24} />}
            to="/home"
          />
          {!isLoginPage && (
            <div className="flex items-center gap-6">
              <span>
                <CiHeart size={32} />
              </span>
              <CustomNavBar to="/cart">
                <span>
                  <CiShoppingCart size={32} />
                </span>
              </CustomNavBar>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
