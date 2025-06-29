"use client";

import React from "react";
import {
  HomeIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  PhoneIcon,
  XMarkIcon,
  Bars3Icon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li>
      <a
        href={href || "#"}
        onClick={handleClick}
        className="flex items-center gap-2 font-medium cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "About",
    icon: UserCircleIcon,
    href: "/#about",
  },
  {
    name: "Menu",
    icon: ShoppingBagIcon,
    href: "/menu-page",
  },
  {
    name: "Contact",
    icon: PhoneIcon,
    href: "/#contact",
  },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolling ? "bg-white shadow" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className={`text-lg font-bold cursor-pointer ${isScrolling ? "text-blue-gray-900" : "text-white"}`}>
          Paradise Cafe
        </Link>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"}`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <button
          onClick={handleOpen}
          className={`ml-auto inline-block lg:hidden p-2 rounded ${isScrolling ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;