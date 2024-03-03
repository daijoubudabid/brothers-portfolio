import { DesktopNav } from "@/components/DesktopNav";
import { Hero } from "@/components/Hero";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={`${poppins.className} main-body`}>
      {/* <div className="container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px]">
        <div className="top-44 col-span-12 lg:sticky lg:col-span-4 lg:h-screen">
          <Hero />
        </div>
        <div className="col-span-12 lg:col-span-8 ">
          <DesktopNav />
        </div>
      </div> */}
    </main>
  );
}
