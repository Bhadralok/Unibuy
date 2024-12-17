import { VscSend } from "react-icons/vsc";
import CustomInput from "../UI/CustomInput";
import Logo from "../assets/svg/unibuy.svg";
import CustomNavlink from "../UI/CustomNavBar";
export default function Footer() {
  return (
    <div className="h-[27.5em] bg-black flex gap-36 text-lg justify-center text-white px-28 pt-24">
      <div className="flex flex-col text-left items-start gap-10 leading-none">
        <div className="h-12 flex justify-between items-center overflow-hidden">
          <img src={Logo} className="h-32 relative -left-3" alt="Logo" />
        </div>
        <div className="flex flex-col gap-10">
          <p>Subscribe</p>
          <div className="flex flex-col gap-4">
            <p>Get 10% off your first order</p>
            <CustomInput
              type="footer"
              placeholder="Enter your email"
              text={true}
              to="/sent"
              icon={<VscSend color="white" size={24} />}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-44">
        <h1 className="text-lg font-bold">Support</h1>
        <p>University of Benin, Benin City, Edo State</p>
        <p>UnibuyUniben@gmail.com</p>
        <p>09154145788</p>
      </div>
      <div className="flex flex-col gap-4 w-44">
        <h1 className="text-lg font-bold">Account</h1>
        <p>My Account</p>
        <div className="flex gap-2">
          <CustomNavlink color="text-white" to="/signin">
            Login
          </CustomNavlink>
          <p>/</p>
          <CustomNavlink color="text-white" to="/signup">
            Register
          </CustomNavlink>
        </div>
        <div className="flex flex-col gap-4">
          <CustomNavlink color="text-white" to="/">
            Cart
          </CustomNavlink>
          <CustomNavlink color="text-white" to="/">
            Wishlist
          </CustomNavlink>
          <CustomNavlink color="text-white" to="/">
            Shop
          </CustomNavlink>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-bold">Quick Link</h1>
        <CustomNavlink color="text-white" to="/">
          Privacy Policy
        </CustomNavlink>
        <CustomNavlink color="text-white" to="/">
          Terms of Use
        </CustomNavlink>
        <CustomNavlink color="text-white" to="/">
          FAQ
        </CustomNavlink>
        <CustomNavlink color="text-white" to="/">
          Contact
        </CustomNavlink>
      </div>
      <div>
        <div className="flex flex-col gap-4 w-44">
          <h1 className="text-lg font-bold">Download App</h1>
          <p>
            We&apos;re Currently working on that, don&apos;t worry, we work
            diligently
          </p>
        </div>
      </div>
    </div>
  );
}
