import CustomNavlink from "./CustomNavBar";

export default function CustomInput({
  icon,
  placeholder,
  text,
  type = "login",
  to
}) {
  const size = " w-[80%] outline-none border-none rounded-none bg-white";
  const styles = {
    login: "w-fit p-2 focus:outline-none pr-10",
    footer: "w-fit p-2 bg-black border-2 pr-10 border-white focus:outline-none",
    form: "h-full w-full border-b-2 focus:outline-none focus:border-b-2 focus:border-black p-1 text-lg",
    contact: "w-72 p-3 h-12 bg-brandGrey outline-none focus:outline-none "
  };
  return (
    <div className="flex h-10 items-center justify-evenly w-full">
      <input
        type={text ? "text" : "password"}
        className={styles[type]}
        placeholder={placeholder}
      />
      {icon && (
        <CustomNavlink to={to}>
          <span className="relative right-8">{icon}</span>
        </CustomNavlink>
      )}
    </div>
  );
}
