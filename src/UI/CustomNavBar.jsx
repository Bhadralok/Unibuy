import { NavLink } from "react-router-dom";

export default function CustomNavlink({
  to,
  children,
  color = "text-black",
}) {
  return (
    <NavLink to={to} className={`${color} hover:underline `}>
      {children}
    </NavLink>
  );
}
