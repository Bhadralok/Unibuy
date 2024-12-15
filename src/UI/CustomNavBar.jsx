import { NavLink } from "react-router-dom";

export default function CustomNavlink({ to, children }) {
  return (
    <NavLink to={to} className={"text-black hover:underline" }>
      {children}
    </NavLink>
  );
}
