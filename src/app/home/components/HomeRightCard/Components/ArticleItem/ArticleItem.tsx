import React, { memo } from "react";
import { ItemWarpper } from "./style";
import { Box, Text } from "@chakra-ui/react";
const ArticleItem = memo(() => {
  return (
    <ItemWarpper>
      <Box position="relative" className="item" w="238px" padding="5px 15px">
        <Text
          left="6"
          color="#FFF"
          position="absolute"
          bottom="8"
          fontSize="xs"
        >
          2021-03-31
        </Text>
        <Text
          left="6"
          color="#FFF"
          position="absolute"
          bottom="4"
          fontSize="sm"
        >
          短链接服务
        </Text>
      </Box>
    </ItemWarpper>
  );
});
ArticleItem.displayName = "ArticleItem";
export default ArticleItem;
