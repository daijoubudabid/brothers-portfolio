import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaFacebookF className="z-10" />,
    url: "/",
  },
  {
    icon: <FaTwitter className="z-10" />,
    url: "/",
  },
  {
    icon: <FaDribbble className="z-10" />,
    url: "/",
  },
  {
    icon: <FaLinkedinIn className="z-10" />,
    url: "/",
  },
];

const socialDetails = [
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="#FD7590"
        strokeWidth="0"
        viewBox="0 0 320 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
      </svg>
    ),
    name: "Phone",
    details: "+123 456 7890",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="#6AB5B9"
        strokeWidth="0"
        viewBox="0 0 384 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
      </svg>
    ),
    name: "Location",
    details: "Hong kong china",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
      </svg>
    ),
    name: "Email",
    details: "example@mail.com",
  },
  {
    icon: (
      <svg
        stroke="currentColor"
        fill="#C17CEB"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
      </svg>
    ),
    name: "Birthday",
    details: "May 27, 1990",
  },
];

export const Hero = () => {
  return (
    <div className="relative mx-auto mb-6 mt-[180px] w-full rounded-[20px] bg-white px-6 text-center md:mt-[220px] lg:mb-0 lg:mt-0 ">
      <Image
        src={"/hero.jpg"}
        alt="hero image"
        width={240}
        height={240}
        className="absolute left-[50%] mx-auto -mt-[140px] h-[240px] -translate-x-[50%] transform rounded-[20px] drop-shadow-xl"
      />
      <div className="pb-8 pt-[100px]">
        <h1 className="mb-1 mt-6 text-[1.8rem] font-semibold">
          Monalisa Ashley
        </h1>
        <h3 className="mb-4 inline-block rounded-lg px-5 py-1.5 text-[#7B7B7B]">
          Ui/Ux Designer
        </h3>
        <div className="flex justify-center space-x-3">
          {socialLinks.map((item, index) => (
            <Link href={item.url} key={index}>
              <span className="socialIcon">{item.icon}</span>
            </Link>
          ))}
        </div>
        <div className="mt-7 rounded-2xl bg-[#F3F6F6] p-7">
          {socialDetails.map((item, index) => (
            <div className="flex border-b border-[#E3E3E3] py-2.5" key={index}>
              <span className="socialIcon z-10 cursor-pointer bg-white shadow-md">
                {item.icon}
              </span>
              <div className="ml-2.5 text-left">
                <p className="text-xs text-[#44566C]">{item.name}</p>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
