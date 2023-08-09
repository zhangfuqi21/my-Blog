import React, { memo } from "react";
import { RightCardWarpper } from "./style";
import { Box, Card, VStack } from "@chakra-ui/react";
import ArticleItem from "./Components/ArticleItem/ArticleItem";
import TagItem from "./Components/TagItem/TagItem";
import { useSelector } from "react-redux";
const HomeRightCard = memo(() => {
  const list = useSelector((store: any) => store.home.site);
  console.log(list);

  return (
    <RightCardWarpper>
      <Card zIndex="-1" w="265px" borderRightColor="#ffffff">
        <VStack align="stretch">
          <Box
            backgroundColor="#F3F4F5"
            fontSize="14px"
            padding="5px 15px"
            borderBottom="2px solid #fbbd08"
          >
            随机文章
          </Box>
          <VStack align={"center"}>
            {list.randomBlogList.map((item: any, index: number) => {
              return <ArticleItem list={item} key={index} />;
            })}
          </VStack>
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
          <TagItem tagList={list.tagList} />
        </VStack>
      </Card>
    </RightCardWarpper>
  );
});
HomeRightCard.displayName = "HomeRightCard";
export default HomeRightCard;
