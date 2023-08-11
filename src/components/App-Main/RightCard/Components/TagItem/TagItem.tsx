import { Box, HStack, Tag } from "@chakra-ui/react";
import React, { memo } from "react";

const TagItem = memo((props: any) => {
  const { tagList } = props;

  return (
    <div>
      <Box padding="5px 10px" fontSize="12px">
        <HStack flexWrap="wrap" spacing="8px" display="flex">
          {tagList.map((item: any, index: number) => (
            <Tag
              backgroundColor={"yellowgreen"}
              size="lg"
              key={index}
              variant="solid"
              bgColor={item.color}
            >
              {item.name}
            </Tag>
          ))}
        </HStack>
      </Box>
    </div>
  );
});
TagItem.displayName = "TagItem";
export default TagItem;
