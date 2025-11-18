"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "../app/login/actions";

export default function NavLinkItem({ href, text, isLogout }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleLogout = async () => {
    await logout();
  };

  if (isLogout) {
    return (
      <button
        onClick={handleLogout}
        className="text-black font-semibold text-md hover:underline underline-offset-4 cursor-pointer"
      >
        {text}
      </button>
    );
  }

  return (
    <Link href={href}>
      <p
        className={`text-black font-semibold text-md hover:underline underline-offset-4 ${
          isActive ? "underline" : ""
        }`}
      >
        {text}
      </p>
    </Link>
  );
}
