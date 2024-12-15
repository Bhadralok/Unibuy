export default function CustomInput({ icon, placeholder, text, type = "login"}) {
  const size = " w-[80%] outline-none border-none rounded-none bg-white";
  const styles = {
    login: "w-fit p-2 focus:outline-none",
    form: "h-full w-full border-b-2 focus:outline-none focus:border-b-2 focus:border-black p-1 text-lg"
  };
  return (
    <div className="flex items-center bg-[#F5F5F5] h-10 justify-evenly  w-full">
      <input type={text ? "text" : "password"} className={styles[type]} placeholder={placeholder} />
      {icon && <span>{icon}</span>}
    </div>
  );
}
