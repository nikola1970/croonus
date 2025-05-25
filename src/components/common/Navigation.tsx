"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import {
  IoIosSearch as SearchIcon,
  IoIosMenu as MenuIcon,
  IoMdCloseCircleOutline as CloseIcon,
} from "react-icons/io";
import { IoBookmarkOutline as BookmarkIcon } from "react-icons/io5";
import { LiaUser as UserIcon } from "react-icons/lia";
import { BsCart2 as CartIcon } from "react-icons/bs";
import { IconType } from "react-icons";
import Link from "next/link";

type NavLinkItem = {
  name: string;
  href: string;
};

type MainNavLinkItem = NavLinkItem & {
  isActive?: boolean;
};

type UtilityIconItem = {
  icon: IconType;
  label: string;
  href: string;
  hasBorder?: boolean;
};

type NavLinksProps = {
  links: NavLinkItem[];
  separated?: boolean;
  className?: string;
};

type MainNavLinksProps = {
  links: MainNavLinkItem[];
  showMobile: boolean;
};

type UtilityNavProps = {
  icons: UtilityIconItem[];
};

const brandLinks: NavLinkItem[] = [
  { name: "soundcore", href: "#" },
  { name: "eufy", href: "#" },
  { name: "Nebula", href: "#" },
  { name: "Anker", href: "#" },
  { name: "Solix", href: "#" },
  { name: "AnkerWork", href: "#" },
  { name: "eufy make", href: "#" },
];

const infoLinks: NavLinkItem[] = [
  { name: "O nama", href: "#" },
  { name: "Kontakt", href: "#" },
  { name: "Pomoc pri kupovini", href: "#" },
];

const mainNavLinks: MainNavLinkItem[] = [
  { name: "Pocetna", href: "#", isActive: true },
  { name: "Power Banks", href: "#" },
  { name: "Slusalice", href: "#" },
  { name: "Mini porjektori", href: "#" },
  { name: "Kablovi", href: "#" },
  { name: "Hubs i Docks", href: "#" },
  { name: "Roboti za travnjake", href: "#" },
  { name: "Novo", href: "#" },
  { name: "Akcije", href: "#" },
];

const utilityIcons: UtilityIconItem[] = [
  { icon: SearchIcon, label: "Search icon", href: "#", hasBorder: true },
  { icon: UserIcon, label: "User icon", href: "#" },
  { icon: BookmarkIcon, label: "Bookmark icon", href: "#" },
  { icon: CartIcon, label: "Cart icon", href: "#" },
];

const NavLinks = ({ links, separated, className = "" }: NavLinksProps) => (
  <ul
    className={`${className} ${separated ? "xl:[&>li:not(:last-child)]:border-anker xl:[&>li:not(:last-child)]:border-r xl:[&>li:not(:last-child)]:pr-5" : ""}`}
  >
    {links.map((link) => (
      <li key={link.name}>
        <a href={link.href}>{link.name}</a>
      </li>
    ))}
  </ul>
);

const MainNavLinks = ({ links, showMobile }: MainNavLinksProps) => (
  <ul
    className={`gap-5 text-sm xl:flex ${
      showMobile
        ? "absolute top-22 left-0 z-10 block w-full bg-white p-4"
        : "hidden"
    }`}
  >
    {links.map((link) => (
      <li
        key={link.name}
        className={link.isActive ? "text-anker relative" : "relative"}
      >
        <a className="inline-block pb-2 lg:pb-0" href={link.href}>
          {link.name}
        </a>
        {link.isActive && (
          <span className="bg-anker absolute bottom-[-34px] left-0 hidden h-[7px] w-full lg:block" />
        )}
      </li>
    ))}
  </ul>
);

const UtilityNav = ({ icons }: UtilityNavProps) => (
  <ul className="hidden gap-4 text-sm sm:flex">
    {icons.map((item) => (
      <li
        key={item.label}
        className={item.hasBorder ? "border-anker border-r pr-5" : ""}
      >
        <a href={item.href} aria-label={item.label}>
          <item.icon className="size-6" />
        </a>
      </li>
    ))}
  </ul>
);

export function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);

  return (
    <header className="border-anker border-b">
      {/* Top black bar */}
      <div className="relative bg-black py-2">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs md:justify-between md:text-sm">
            <p className="text-anker text-center">
              Besplatna dostavna na iznos porudzbine preko 12.000 din
            </p>
            <NavLinks
              links={brandLinks}
              className="hidden gap-5 text-white xl:flex"
            />
            <NavLinks
              links={infoLinks}
              separated
              className="flex gap-5 text-white"
            />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav aria-label="Main navigation">
        <div className="relative container">
          <div className="flex justify-between">
            <div className="flex flex-1 items-center justify-between py-5">
              <div className="flex items-center gap-x-10">
                <Link href="/" aria-label="Anker Home">
                  <Image
                    src="/assets/anker-logo.svg"
                    width={200}
                    height={40}
                    alt="Anker logo"
                  />
                </Link>
                <MainNavLinks
                  links={mainNavLinks}
                  showMobile={showMobileMenu}
                />
              </div>
              <UtilityNav icons={utilityIcons} />
            </div>

            <button
              className="ml-10 xl:hidden"
              aria-label={showMobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMobileMenu}
              onClick={toggleMobileMenu}
            >
              {showMobileMenu ? (
                <CloseIcon className="size-8" />
              ) : (
                <MenuIcon className="size-8" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
