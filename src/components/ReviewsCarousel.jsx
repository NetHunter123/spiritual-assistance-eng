import {useRef} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {Carousel} from '@mantine/carousel';
import {rem} from "@mantine/core";
import {Image} from "@mantine/core";
import useMediaQueries from "@/utils/useMediaQueries";
import Zoom from "react-medium-image-zoom";

export default function ReviewsCarousel() {
  const autoplay = useRef(Autoplay({delay: 20}));
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")
  const xs = useMediaQueries("xs")
  let slideHeight = xs ? 500 : 450

  const data = [
    {image: "./feedback1.jpg"},
    {image: "./feedback2.png"},
    {image: "./feedback3.png"},
    {image: "./feedback4.png"},
    {image: "./feedback5.png"},
  ]
  return (<>
    <Carousel
      withIndicators={true}
      slideSize="100%"
      height={slideHeight}
      slideGap="md"
      controlsOffset="xs"
      controlSize={28}
      loop
      breakpoints={[
        {maxWidth: 'md', slideSize: '420px'},
        {maxWidth: 'sm', slideSize: '390px'},
      ]}
      // nextControlIcon={<IconArrowRight size={16} />}
      // previousControlIcon={<IconArrowLeft size={16} />}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        root: {},
        slide: {
          justifyContent: "center",
          // maxWidth: "420px"
        },
        indicators: {
          bottom: "-20px"
          // color: "white",
          // backgroundColor: "white",
        },
        indicator: {
          color: "white",
          backgroundColor: "#C98D4E !important",

          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },

        },
        controls: {
          display: !md ? "none" : "auto",
          left: "-50px",
          right: "-50px",
        },
        control: {
          backgroundColor: "#C98D4E !important",
          border: "0",
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        }

      }}
    >
      {data.map((item) => <Carousel.Slide key={item.image}>
          {/*<div className="bg-[#220] w-full h-[200px]">*/}
          <div className="photo w-full mx-auto">
            <Zoom>
              <Image height={slideHeight} fit={"contain"} withPlaceholder src={`${item.image}`}
                     alt="Main Photo"/>
            </Zoom>
          </div>
          {/*</div>*/}
        </Carousel.Slide>
      )}
    </Carousel>
  </>);
}
