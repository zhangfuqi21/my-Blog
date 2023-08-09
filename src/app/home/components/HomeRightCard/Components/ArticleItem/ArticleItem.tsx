import React, { memo } from "react";
import ItemWarpper  from "./style";
import { Box, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
interface improps {
  list: {
    createTime: string;
    firstPicture: string;
    id: number;
    password: string;
    privacy: boolean;
    title: string;
  };
}
const ArticleItem: React.FC<improps> = memo((props: improps) => {
  const list = props.list;

  return (
    <ItemWarpper list={list.firstPicture}>
      <div className="mask"></div>
      <Box
        position="relative"
        className="item"
        w="238px"
        padding="5px 15px"
        border={"0.3px solid black"}
        borderRadius={"5px"}
      >
        <Text
          left="6"
          color="#29b989"
          position="absolute"
          bottom="6"
          fontSize="xs"
        >
          {dayjs(list.createTime).format("YYYY/MM/DD")}
        </Text>
        <Text
          w={"80%"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
          textOverflow={"ellipsis"}
          left="6"
          color="#2985b9"
          position="absolute"
          bottom="2"
          fontSize="sm"
        >
          {list.title}
        </Text>
      </Box>
    </ItemWarpper>
  );
});
ArticleItem.displayName = "ArticleItem";
export default ArticleItem;
