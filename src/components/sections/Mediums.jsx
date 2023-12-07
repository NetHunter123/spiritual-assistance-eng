import React from "react";
import AccordionMediums from "@/components/AccordionMediums";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Image, Button, rem } from "@mantine/core";

const Services = () => {

const linkWhatsApp="https://wa.me/917869738218"

  const mediums = [
    {
      value: "nahata",
      name: "Punit Nahata",
      avatar: "./punit_nahata.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: linkWhatsApp,
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/+919668310153",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Psychic, who is a specialist in the darkest issues will help as well as in white magic. Possesses the gift to speak with the dead, who help to solve any question.",
    },
    {
      value: "nagabushanam",
      name: "Archena Nagabushanam",
      avatar: "./archena_nagabushanam.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: linkWhatsApp,
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/+919668310153",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "A hereditary psychic, a specialist in love magic, love spells and rituals. If you feel that you need any advice or help in relationships, the best solution is to turn to her.",
    },
    {
      value: "verma",
      name: "Anuradha Verma",
      avatar: "./anuradha_verma.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: linkWhatsApp,
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/+919668310153",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "A psychic who is a specialist in solving non-standard issues and problems, she has no ritual that would not solve your problem.",
    },
    {
      value: "gurukkal",
      name: "Shiva Sri Gurukkal",
      avatar: "./shiva_sri_gurukkal.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: linkWhatsApp,
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/+919668310153",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Descendant of an Alanian magician. He uses rare herbs and prayers for his rituals. Possesses both black and white magic. Will help to remove or put the strongest magic. If you feel something wrong he will solve the issue with the help of the spirit world.",
    },
  ];
  return (
    <div className={"container"}>
      <a id={"mediums"} className="anchor" />
      <div className="z-10 py-[40px]">
        <h3 className="title">Choose your Medium</h3>
        {/* <p className="sub-title">Здесь можно ознакомиться с предоставляемыми услугами <span
          className={"whitespace-nowrap"}>от Анны Астаховой:</span></p> */}
        <div className="max-w-[760px] mx-auto">
          <AccordionMediums mediums={mediums} />
        </div>
      </div>
    </div>
  );
};

export default Services;
