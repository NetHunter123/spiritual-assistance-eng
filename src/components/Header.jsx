import React from 'react';
import Nav from "@/components/Nav";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className={"flex flex-row justify-center flex-1 py-[40px]"}>

        <div className="relative w-fit flex">
          <Nav/>
          <div className="ml-[10px] xl:absolute right-[-200px] xl:right-[-235px] ">
            {/* <Button text={"Связаться со мной"} link={"contacts"}/> */}
          </div>
        </div>
    </header>
  );
};

export default Header;
