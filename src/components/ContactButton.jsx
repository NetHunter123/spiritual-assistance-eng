import React from 'react';
import {Image, Button, rem} from "@mantine/core";
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ['cyrillic']})

const ContactButton = ({text, link, icon, mini = false}) => {
  return (<Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    href={`${link}`}
    leftIcon={icon}
    styles={(theme) => ({

      root: {
        backgroundColor: `${mini ? '#ffffff !important' : '#C98D4E !important'}`, border: 0, color: "#000",

        height: rem(mini ? "35px" : 49),
        width: rem(mini ? "35px" : 240),
        padding: `${mini ? "0px" : "0 12px 0 18px"}`,
        borderRadius: `${mini ? "50%" : "4px"}`,
        marginRight: `${mini ? "10px" : "0px"}`,
        // paddingLeft: rem(20),
        // paddingRight: rem(20),
        '&:not([data-disabled])': theme.fn.hover({
          backgroundColor: theme.fn.darken('#C98D4E', 0.05),
        }),
      },
      inner: {

        // display:"flex",
        // maxWidth: "max-content",
        width: `${mini ? "30px" :  "auto"}`,
        margin: "0 auto",
        fontSize: "18px",
        fontWeight: "400",
        textTransform: "uppercase",
        fontFamily: {montserrat},
        justifyContent: `${mini ? "center" :  "start"}`
      },
      // label: {
      //   display: "none"
      // },
      leftIcon: {
        // fontSize: "30px", marginRight: theme.spacing.xl,
        margin: `${mini ? "0px" :  "0 20px 0 0"}`,
        // margin:"0 auto",
        maxWidth: "40px !important",
        width: "40px !important",
      },

    })}
  >
    {mini ? "" : text}    </Button>);
};

export default ContactButton;
