import React from "react";
import Button from "@/components/Button";
import { Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useMediaQueries from "@/utils/useMediaQueries";
import Zoom from "react-medium-image-zoom";

const Hero = () => {
  const md = useMediaQueries("md");
  const lg = useMediaQueries("lg");
  const sm = useMediaQueries("sm");
  console.log("md:", md);
  return (
    <>
      <div className="container ">
        <div
          className={
            "flex w-full justify-center md:justify-between items-center md:py-[30px] lg:py-[60px]"
          }
        >
          <div className="info max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center mr-0 md:mr-[30px]">
            <h1
              className={
                "text-primary leading-[40px] text-center text-[40px] lg:text-s64 font-[500] mb-[10px] max-sm:text-[38px] max-[502px]:max-w-[200px] max-xs:w-[100%]"
              }
            >
              Spiritual Assistance
            </h1>
            {/*<p className={"infoText text-[18px] lg:text-s22 mb-[25px]"}>Родовая ведьма черной магии</p>*/}
            <p
              className={
                "infoText text-[18px] lg:text-s22 mb-[25px] max-md:text-center"
              }
            >
              Hello, this is an app that will help you find a solution to your
              problem or answer your questions
            </p>
            <div className="photo mb-[20px] md:hidden">
              {/* <Image
                width={lg ? 384 : md ? 314 : 300}
                fit={"contain"}
                withPlaceholder
                src="./firstPhoto.jpg"
                alt="Main Photo"
              /> */}
              <div className="relative animate-[spin_40s_linear_infinite] z-[0]">
                <Image
                  height={lg ? 384 : md ? 314 : 300}
                  width={lg ? 384 : md ? 314 : 300}
                  withPlaceholder
                  src="./animateCircle.png"
                  alt="animation"
                />
                <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
                  <Image
                    height={lg ? 314 : md ? 230 : 230}
                    width={lg ? 314 : md ? 230 : 230}
                    withPlaceholder
                    src="./app-logo.webp"
                    alt="animation"
                  />
                </div>
              </div>
            </div>
            {/* <p
              className={
                "infoText max-[768px]:text-center text-[16px] lg:text-[18px] whitespace-pre-wrap w-full"
              }
            >
              Для обсуждения проблемы свяжитесь с одним из Медиумом
            </p> */}
            <p
              className={
                "infoText max-[768px]:mb-5 text-[16px] lg:text-[18px] font-bold md:mb-[20px] lg:mb-[40px] text-center"
              }
            >
              To resolve or discuss a problem, contact one of the Mediums
            </p>

            <div className="info__btn flex justify-center gap-[20px] lg:gap-[40px] max-md:mb-0 mb-[60px] ">
              {/* <Button
                text={"Записатся на сеанс!"}
                link={"#"}
                place={"hero"}
                variant={"outline"}
              /> */}
              <div className="relative">
                <div className="animate-ping max-w-[200px] absolute top-[0px] bottom-0 left-0 right-0 bg-primary rounded-[10px] z-10 "></div>
                <div className="relative z-20">
                  <Button
                    text={"Book a session!"}
                    link={"https://wa.me/918001184963"}
                    place={"hero"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="photo hidden md:block">
            {/* <Image width={lg ? 384 : md ? 314 : 300} fit={"contain"} withPlaceholder src='./firstPhoto.jpg'
                   alt="Main Photo"/> */}
            <div className="relative animate-[spin_40s_linear_infinite] z-[0]">
              <Image
                height={lg ? 384 : md ? 314 : 300}
                width={lg ? 384 : md ? 314 : 300}
                withPlaceholder
                src="./animateCircle.png"
                alt="animation"
              />
              <div className="absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
                <Image
                  height={lg ? 314 : md ? 230 : 200}
                  width={lg ? 314 : md ? 230 : 200}
                  withPlaceholder
                  src="./app-logo.webp"
                  alt="animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
