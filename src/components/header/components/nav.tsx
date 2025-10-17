import { menuLinks } from "@/config/menu-links";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export function Nav() {
  return (
    <nav className="flex gap-2">
      {menuLinks.map((link) => (
        <NavLink key={link.label} to={link.link} className={({ isActive }) => cn("p-2.5 text-gray-500", { "bg-blue-500 rounded font-bold text-white": isActive })}>{link.label}</NavLink>
      ))}
    </nav>
  )
}