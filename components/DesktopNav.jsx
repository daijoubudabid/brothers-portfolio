import { navLinks } from "@/components/data";
import Link from "next/link";

export const DesktopNav = () => {
  return (
    <div className="mb-10 ml-auto hidden h-[144px] rounded-[16px] bg-white p-[30px] lg:block lg:w-[526px]">
      <nav className="hidden lg:block">
        <ul className="flex justify-between">
          {navLinks.map((item, index) => (
            <Link key={index} href={item.url}>
              <li className="navLinks">
                <span className="z-10 mb-1 text-xl">{item.icon}</span>
                <span className="z-10">{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
