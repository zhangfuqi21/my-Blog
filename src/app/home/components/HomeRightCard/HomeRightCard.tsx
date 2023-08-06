import React, { memo } from "react";
import { RightCardWarpper } from "./style";
import { Box, Card, VStack } from "@chakra-ui/react";
import ArticleItem from "./Components/ArticleItem/ArticleItem";
import TagItem from "./Components/TagItem/TagItem";
const HomeRightCard = memo(() => {
  return (
    <RightCardWarpper>
      <Card w="265px" borderRightColor="#ffffff">
        <VStack align="stretch">
          <Box
            backgroundColor="#F3F4F5"
            fontSize="14px"
            padding="5px 15px"
            borderBottom="2px solid #fbbd08"
          >
            随机文章
          </Box>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </VStack>
      </Card>
      <Card w="265px" marginTop="10px">
        <VStack align="stretch">
          <Box
            backgroundColor="#F3F4F5"
            fontSize="14px"
            padding="5px 15px"
            borderBottom="2px solid #fbbd08"
          >
            标签云
          </Box>
          <TagItem />
        </VStack>
      </Card>
    </RightCardWarpper>
  );
});
HomeRightCard.displayName = "HomeRightCard";
export default HomeRightCard;
