import React, { memo } from "react";
import { AccordionWarpper } from "./style";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
const HomeAccordion = memo(() => {
  return (
    <AccordionWarpper>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box w="100%">喜欢的动漫📺</Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel w="100" pb={4}>
            异度侵入、春物语、NO GAME NO
            LIFE、实力至上主义的教室、辉夜大小姐、青春猪头少年不会梦到兔女郎学姐、路人女主、Re0、魔禁、超炮、俺妹、在下坂本、散华礼弥、OVERLORD、慎勇、人渣的本愿、白色相簿2、死亡笔记、DARLING
            in the FRANXX、鬼灭之刃
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box w="100%">最喜欢我的女孩子们 🤤</Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel w="100" pb={4}>
            芙兰达、土间埋、食蜂操祈、佐天泪爷、樱岛麻衣、桐崎千棘、02、亚丝娜、高坂桐乃、五更琉璃、安乐冈花火、一色彩羽、英梨梨、珈百璃、时崎狂三、可儿那由多、和泉纱雾、早坂爱
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box w="100%">最喜欢玩的游戏 🎮</Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel w="100" pb={4}>
            Stellaris、巫师、GTA、荒野大镖客、刺客信条、魔兽争霸、LOL、PUBG、耻辱、Screeps
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </AccordionWarpper>
  );
});
HomeAccordion.displayName = "HomeAccordion";
export default HomeAccordion;
