// "use client";

import React, { memo } from "react";
import { CardWapper } from "./style";
import { Box, Card, VStack, Text, Image, IconButton } from "@chakra-ui/react";

import HomeAccordion from "../Accordion/HomeAccordion";
import { useRouter } from "next/navigation";
const HomeLeftCard = memo((props: any) => {
  const router = useRouter();

  // const skip = (item) => {
  //   router.push
  // };
  return (
    <CardWapper>
      <Card align="center" className="card">
        <VStack>
          <Box>
            <Image
              src="https://naccl.top/img/avatar.jpg"
              boxSize="265px"
              alt="Green double couch with wooden legs"
            ></Image>
          </Box>
          <Box>
            <h3>{props.list.introduction.name}</h3>
          </Box>
          <Box>
            <Text fontSize="xs">{props.list.introduction.rollText[0]}</Text>
          </Box>
          <Box
            w="100%"
            justifyContent="center"
            display="flex"
            // borderBottom="1px solid #f2f2f2"
          >
            <IconButton
              color={"black"}
              onClick={() => router.push(props.list.introduction.github)}
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-github"></i>}
            />
            <IconButton
              color={"#269ddb"}
              onClick={() => router.push(props.list.introduction.telegram)}
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-twitter-circle-fill"></i>}
            />
            <IconButton
              color={"#33b5e3"}
              onClick={() => router.push(props.list.introduction.bilibili)}
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-bilibili"></i>}
            />
            <IconButton
              color={"#e63f3e"}
              onClick={() => router.push(props.list.introduction.netease)}
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-netease-cloud-music-line"></i>}
            />
            <IconButton
              color={"#161616"}
              onClick={() => router.push(props.list.introduction.email)}
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-icon-email"></i>}
            />
          </Box>
          <Box w="100%">
            <HomeAccordion />
          </Box>
        </VStack>
      </Card>
    </CardWapper>
  );
});
HomeLeftCard.displayName = "HomeLeftCard";
export default HomeLeftCard;
