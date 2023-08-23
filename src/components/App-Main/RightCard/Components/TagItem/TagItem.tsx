import { Box, HStack, Tag } from "@chakra-ui/react";
import Link from "next/link";
import React, { memo } from "react";

const TagItem = memo((props: any) => {
  const { tagList } = props;

  return (
    <div>
      <Box padding="5px 10px" fontSize="12px">
        <HStack flexWrap="wrap" spacing="8px" display="flex">
          {tagList.map((item: any, index: number) => (
            <Link href={`/tag/${item.name}`} key={index}>
              <Tag
                backgroundColor={"yellowgreen"}
                size="lg"
                variant="solid"
                bgColor={item.color}
              >
                {item.name}
              </Tag>
            </Link>
          ))}
        </HStack>
      </Box>
    </div>
  );
});
TagItem.displayName = "TagItem";
export default TagItem;
