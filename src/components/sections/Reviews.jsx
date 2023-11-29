import React from 'react';
import AccordionServices from "@/components/AccordionServices";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"reviews"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <div className="reviews-title_wrapper z-10">
          <h3 className="title relative z-10">Отзывы</h3>
          <p className="sub-title relative z-20">В социальных сетях во вкладке контакты так же есть отзывы многих довольных клиентов, которые вы можете прочитать. Ничего не говорит лучше о моей работе, чем сотни положительных отзывов моих клиентов, ниже вы можете увидеть несколько из них:</p>
          <div className="max-w-[760px] mx-auto">
          </div>
        </div>
        <div className="reviews_carousel w-full px-[40px] max-w-[800px] max-md:px-0 mx-auto relative z-10">
          <ReviewsCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Services;
