import React from 'react';
import Link from "next/link";

const Button = ({text, link, variant = "filled", place = "menu"}) => {
  return (
    <a
      className={`inline-block text-center  ${variant === "filled" ? "bg-primary text-textBlack" :
        "text-primary bg-transparent border border-primary "}  h-btn " +
      " max-md:text-[16px] text-s18 ${place === "menu" ? "min-w-[160px]" : " max-md:min-w-[140px] min-w-[180px]"} px-[10px] rounded-md leading-btn font-medium`}
      href={`#${link}`}>{text}</a>
  );
};
// ${place==="menu"?"px-[23px]":"px-[43px]"

export default Button;
