import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import CustomInput from "../UI/CustomInput";
import CustomButton from "../UI/CustomButton";

export default function Contact() {
  return (
    <div className="flex px-44 pt-44">
      <div className=" shadow-lg w-[30vw] h-fit flex flex-col border-2 p-10 gap-10 leading-10">
        <div className="border-b-2 border-brandGrey pb-10">
          <div className="flex gap-5 items-center">
            <FaPhoneAlt size={40} color="red" />
            <h1 className="text-lg font-bold">Call To Us</h1>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +234 915 414 5788</p>
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <MdMarkEmailUnread size={40} color="red" />
            <h1 className="text-lg font-bold"> Write To Us</h1>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Email: thisisamockup@gmail.com</p>
          <p>Email: thisisamockup@gmail.com</p>
        </div>
      </div>
      <div className=" w-full h-fit flex flex-col gap-5 relative">
        <div className="flex items-center h-12 justify-center">
          <CustomInput placeholder="Your name" type="contact" text={true} />
          <CustomInput placeholder="Your Email" type="contact" text={true} />
          <CustomInput
            placeholder="Your Phone Number"
            type="contact"
            text={true}
          />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <textarea
            className="w-fit"
            name="message"
            id="message"
            placeholder="Your Message"
          ></textarea>
          <div className="absolute right-0 bottom-0">
            <CustomButton type="primary" size="regular">
              Something
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
