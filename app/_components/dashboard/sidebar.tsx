"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Ideas",
  },
  {
    href: "/dashboard/request",
    label: "Request",
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-slate-50 min-h-screen p-6">
      <div className="flex items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
        <span className="text-2xl font-bold ml-2">build-n-showcase</span>
      </div>

      <ul className="menu  flex flex-col gap-3 p-4">
        {navItems.map((item) => (
          <li key={item.href} className="text-base-content">
            <Link
              href={item.href}
              className={`transition-all hover:bg-primary hover:text-primary-content ${
                pathname === item.href ? "bg-primary text-primary-content" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
