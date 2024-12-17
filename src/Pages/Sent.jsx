import sent from "../assets/svg/SentSvg.svg";
import CustomNavlink from "../UI/CustomNavBar";
export default function Sent() {
  return (
    <div className="flex flex-col w-screen gap-4 h-screen items-center justify-center">
      <h1>Email sent</h1>
      <img src={sent} className="h-64" alt="sent" />
      <p></p>
      <CustomNavlink to="/">
        <button className="h-11 text-white  w-80 bg-black">Click me to go back</button>
      </CustomNavlink>
    </div>
  );
}
