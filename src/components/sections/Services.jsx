import React from 'react';
import AccordionServices from "@/components/AccordionServices";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"services"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <h3 className="title">Услуги</h3>
        <p className="sub-title">Здесь можно ознакомиться с предоставляемыми услугами <span
          className={"whitespace-nowrap"}>от Анны Астаховой:</span></p>
        <div className="max-w-[760px] mx-auto">
          <AccordionServices/>
        </div>
      </div>
    </div>
  );
};

export default Services;
