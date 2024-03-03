import { Demo } from "@/components/Demo";
import { DesktopNav } from "@/components/DesktopNav";
import { Hero } from "@/components/Hero";
import { MobileNav } from "@/components/MobileNav";
import { useRouter } from "next/router";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <section className="main-body min-h-screen">
          <MobileNav />
          <div className="container grid grid-cols-12 justify-between md:gap-10 lg:mt-[220px]">
            <div className="top-44 col-span-12 lg:sticky lg:col-span-4 lg:h-screen">
              <Hero />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <DesktopNav />
              <Demo />
            </div>
          </div>
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
