import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiMoonClearLine } from "react-icons/ri";
import { navLinks } from "./data";

export const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    console.log("Clicked");
  };

  return (
    <header className="relative bg-[#F3F6F6] lg:bg-transparent">
      <div className="container flex w-full justify-between bg-[#F3F6F6] py-5 lg:bg-transparent lg:px-0 lg:pt-[50px]">
        <div className="flex w-full items-center justify-between px-4">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={153} height={26} alt="logo" />
          </Link>
          <nav
            className={`absolute left-0 top-full w-full bg-white px-4 ${openMenu ? "block" : "hidden"}`}
          >
            <ul>
              {navLinks.map((link, index) => (
                <Link href={link.url} key={index}>
                  <li className="mb-1 flex items-center gap-2 rounded-md from-[#FA5252] to-[#DD2476] px-2 py-2.5 text-sm font-medium text-gray-500 transition-all duration-300 hover:bg-gradient-to-r hover:text-white md:px-4 xl:px-5">
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-white">
              <span className="animate-pulse text-3xl">
                <RiMoonClearLine />
              </span>
            </div>
            <div className="block lg:hidden">
              <button
                className="flex h-12 w-12 flex-col items-center justify-center gap-[5px] rounded-full bg-[#ef4060]"
                onClick={handleOpenMenu}
              >
                <span className="h-[3px] w-[23px] bg-white" />
                <span className="h-[3px] w-[23px] bg-white" />
                <span className="h-[3px] w-[23px] bg-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
