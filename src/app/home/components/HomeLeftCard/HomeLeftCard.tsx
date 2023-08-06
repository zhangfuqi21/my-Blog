import React, { memo } from "react";
import { CardWapper } from "./style";
import { Box, Card, VStack, Text, Image, IconButton } from "@chakra-ui/react";
import HomeAccordion from "../HomeAccordion/HomeAccordion";
const HomeLeftCard = memo(() => {
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
            <h3>Naccl</h3>
          </Box>
          <Box>
            <Text fontSize="xs">游龙当归海，海不迎我自来也</Text>
          </Box>
          <Box
            w="100%"
            justifyContent="center"
            display="flex"
            // borderBottom="1px solid #f2f2f2"
          >
            <IconButton
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-github"></i>}
            />
            <IconButton
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-twitter-circle-fill"></i>}
            />
            <IconButton
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-bilibili"></i>}
            />
            <IconButton
              className="icobtn"
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="20px"
              icon={<i className="iconfont icon-netease-cloud-music-line"></i>}
            />
            <IconButton
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
