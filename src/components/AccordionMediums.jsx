import React from "react";
import { Accordion, rem } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useMediaQueries from "@/utils/useMediaQueries";
import { Image } from "@mantine/core";

const AccordionMediums = ({ mediums }) => {
  const md = useMediaQueries("md");
  const sm = useMediaQueries("sm");
  const xsfm = useMediaQueries("xsfm");
  const xs = useMediaQueries("xs");
  const uxs = useMediaQueries("425");

  console.log("mediums", mediums);
  return (
    <Accordion
      chevron={<IconPlus size="2rem" />}
      styles={{
        root: {
          borderTop: `${rem(1)} solid #C98D4E`,
          "&": {
            maxWidth: "760px",
            width: "100%",
          },
        },
        control: {
          whiteSpace: "wrap",
          wordWrap: "wrap",
          padding: ` ${!xs ? "0 0px" : !md ? "0 10px" : " 0 16px 0 20px"}`,
          color: "#C98D4E",
          "&:hover": {
            backgroundColor: "#111",
          },
          border: "none",
          "&:first-child": {
            borderTop: `${rem(1)} solid #C98D4E`,
          },
        },

        item: {
          // styles added to all items
          color: "#C98D4E",
          border: "none",
          "&:last-child": {
            borderBottom: `${rem(1)} solid #C98D4E`,
          },
          backgroundColor: "#22222200",
          // styles added to expanded item
          "&[data-active]": {
            backgroundColor: "#110",
          },
          "&:hover": {
            backgroundColor: "#111",
          },
        },

        chevron: {
          // styles added to chevron when it should rotate
          color: "#C98D4E",
          marginLeft: md ? "20px" : "4px",

          "&[data-rotate]": {
            transform: "rotate(-90deg)",
          },
        },
      }}
    >
      {mediums?.map((medium) => {
        return (
          <>
            <Accordion.Item value={`${medium.value}`}>
              <Accordion.Control>
                <div className="flex justify-between ">
                  <div className="h-[150px] max-w-[150px] max-xs:h-[100px] max-xs:max-w-[100px] w-[100%] bg-[#ffffff] rounded-[75px] ml-[50px] max-sm:ml-[30px] max-xs:ml-[0] overflow-hidden">
                    <Image
                      width={!xsfm ? 100 : 150}
                      fit={"contain"}
                      withPlaceholder
                      src={`${medium.avatar}`}
                      alt={medium.name}
                    />
                  </div>
                  <div className="mx-auto text-center flex flex-col justify-center relative">
                    <h4 className="text-[30px] max-xs:text-[20px]  bold max-xs:mb-[25px] ">
                      {medium.name}
                    </h4>
                    <div className="xs:absolute bottom-0 w-[100%] flex justify-center">
                      {medium.chats.map((link) => {
                        return (
                          <a
                            className="[&:not(:last-child)]:mr-[5px]"
                            href={link.link}
                          >
                            {link.icon}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Accordion.Control>
              <Accordion.Panel>
                {medium.desc}

                {/* <a
                  className=" flex leading-[15px] items-center relative cursor-pointer font-[500] w-fit py-[8px] px-[10px] rounded-[8px] mt-[15px] bg-primary text-[black]"
                  href={medium.chats[1].link}
                >
                  Связаться с медиумом
                  <span className="flex ml-[5px] items-center h-[15px] overflow-hidden">
                    <span className="  text-[30px] mb-[2px]">→</span>
                  </span>
                </a> */}

                <a
                  className="ripple flex leading-[15px] items-center relative cursor-pointer font-[500] w-fit py-[8px] px-[10px] rounded-[8px] mt-[25px] bg-primary text-[black]"
                  href={medium.chats[1].link}
                >
                  Связаться с медиумом
                  <span className="flex ml-[5px] items-center h-[15px] overflow-hidden">
                    <span className="  text-[30px] mb-[2px]">→</span>
                  </span>
                </a>

                {/* <a
                  className="animate-pulse flex leading-[15px] items-center relative cursor-pointer font-[500] w-fit py-[8px] px-[10px] rounded-[8px] mt-[15px] bg-primary text-[black]"
                  href={medium.chats[1].link}
                >
                  Связаться с медиумом
                  <span className="flex ml-[5px] items-center h-[15px] overflow-hidden">
                    <span className="  text-[30px] mb-[2px]">→</span>
                  </span>
                </a>
                <a
                  className="animate-bounce flex leading-[15px] items-center relative cursor-pointer font-[500] w-fit py-[8px] px-[10px] rounded-[8px] mt-[15px] bg-primary text-[black]"
                  href={medium.chats[1].link}
                >
                  Связаться с медиумом
                  <span className="flex ml-[5px] items-center h-[15px] overflow-hidden">
                    <span className="  text-[30px] mb-[2px]">→</span>
                  </span>
                </a> */}

                {/* <a
                  className="zoom flex leading-[15px] items-center relative cursor-pointer font-[500] w-fit py-[8px] px-[10px] rounded-[8px] mt-[15px] bg-primary text-[black]"
                  href={medium.chats[1].link}
                >
                  Связаться с медиумом
                  <span className="flex ml-[5px] items-center h-[15px] overflow-hidden">
                    <span className="  text-[30px] mb-[2px]">→</span>
                  </span>
                </a> */}
                {/* <p className={"mb-[20px]"}>
                  Сегодня хочу рассказать Вам о таком важном инструмент как таро
                  🙏 Расклад таро — это зеркало души, с его помощью я могу в
                  полной мере проанализировать Вашу ситуацию, а после предложить
                  наиболее подходящее решение. С моей помощью вы сможете
                  наконец-то обнаружить корень своей проблемы и решить ее раз и
                  навсегда. Не довольствуйтесь шаблонными решениями - доверьтесь
                  моему опыту, и я окажу вам индивидуальную помощь, которую вы
                  заслуживаете 😌
                </p>
                <p className={"mb-[20px]"}>
                  🔸 Получите комплексную диагностику всех сфер вашей жизни с
                  помощью моих услуг. Я оценю ваши отношения, здоровье, 
                  финансовое положение и проверю на наличие негативных
                  магических воздействий. Позвольте мне помочь вам найти корень
                  ваших проблем и предложить индивидуальное решение.
                </p>
                <p>
                  🔸 Для диагностики мне нужны только ваши фото и дата рождения.
                  По этим данным я могу точно определить ситуацию, которая
                  происходит в вашей жизни и отношениях. Иногда диагностика
                  нужна только для того, чтобы понять причины вашего страха и
                  найти правильное решение. А после диагностики мы можем сразу
                  перейти к действиям. Чтобы заказать диагностику - пишите мне в
                  личные сообщения.
                </p> */}
              </Accordion.Panel>
            </Accordion.Item>
          </>
        );
      })}
      {/* <Accordion.Item value="diagnostic">
        <Accordion.Control>
          <div className="flex justify-between ">
            <div className="h-[150px] max-w-[150px] max-xs:h-[100px] max-xs:w-[100px] w-[100%] bg-[#ffffff] rounded-[75px] ml-[50px] max-sm:ml-[30px] max-xs:ml-[0]  overflow-hidden">
              <Image
                width={!xsfm ? 100 : 150}
                fit={"contain"}
                withPlaceholder
                src="./firstPhoto.jpg"
                alt="Main Photo"
              />
            </div>
            <div className="mx-auto text-center flex flex-col justify-center">
              <h4 className="text-[30px] max-xs:text-[24px] bold ">
                Julia Copel
              </h4>
            </div>
          </div>
        </Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[20px]"}>
            Сегодня хочу рассказать Вам о таком важном инструмент как таро 🙏
            Расклад таро — это зеркало души, с его помощью я могу в полной мере
            проанализировать Вашу ситуацию, а после предложить наиболее
            подходящее решение. С моей помощью вы сможете наконец-то обнаружить
            корень своей проблемы и решить ее раз и навсегда. Не довольствуйтесь
            шаблонными решениями - доверьтесь моему опыту, и я окажу вам
            индивидуальную помощь, которую вы заслуживаете 😌
          </p>
          <p className={"mb-[20px]"}>
            🔸 Получите комплексную диагностику всех сфер вашей жизни с помощью
            моих услуг. Я оценю ваши отношения, здоровье, финансовое положение и
            проверю на наличие негативных магических воздействий. Позвольте мне
            помочь вам найти корень ваших проблем и предложить индивидуальное
            решение.
          </p>
          <p>
            🔸 Для диагностики мне нужны только ваши фото и дата рождения. По
            этим данным я могу точно определить ситуацию, которая происходит в
            вашей жизни и отношениях. Иногда диагностика нужна только для того,
            чтобы понять причины вашего страха и найти правильное решение. А
            после диагностики мы можем сразу перейти к действиям. Чтобы заказать
            диагностику - пишите мне в личные сообщения.
          </p>
        </Accordion.Panel>
      </Accordion.Item> */}
    </Accordion>
  );
};
export default AccordionMediums;
