'use client';
import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-items";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="absolute top-10 w-full z-10 h24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo GB Dev" width={58} height={49} className="logo" />
          {/* trocar a logo do header */}
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS?.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
