export default function Button({
  children,
  id,
  onClick,
  disabled,
  isLoading = false,
  buttonType = "button",
  type,
  icon1,
  icon2,
  size = "regular",
}) {
  const sizes = {
    tiny: "w-28 ",
    small: "w-40 ",
    medium: "w-52 ",
    regular: "w-56  ",
    baseLarge: "w-80 ",
    large: "w-full  ",
  };
  const base =
    sizes[size] +
    " flex justify-center p-4 text-sm text-lg focus:outline-none disabled:cursor-not-allowed items-center gap-2 font-medium transition-colors h-14 ease-in duration-150";

  const styles = {
    primary:
      base +
      "bg-brandRed bg-[#DB4444] disabled:bg-brandGrey text-white shadow-md text-base justify-center cursor-pointer disabled:cursor-not-allowed",

    accentOutline:
      base +
      ` bg-white disabled:bg-brandGrey disabled:text-white disabled:border-none text-brandRed  border-2 border-brandRed shadow-md text-lg `,
    danger:
      base +
      ` ${
        isLoading ? "bg-brandLightRed" : "bg-brandRed"
      }  text-white  shadow-sm rounded-3xl`,
    dangerOutline:
      base +
      ` bg-white text-brandRed shadow-md border-2 border-brandRed rounded-3xl`,
  };
  return (
    <button
      id={id}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      className={`${styles[type]}`}
    >
      {icon1 && <span>{icon1}</span>}
      {children}
      {icon2 && <span>{icon2}</span>}
    </button>
  );
}
