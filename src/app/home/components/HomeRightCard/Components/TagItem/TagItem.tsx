import { Box, HStack, Tag } from "@chakra-ui/react";
import React, { memo } from "react";

const TagItem = memo(() => {
  return (
    <div>
      <Box padding="5px 10px" fontSize="12px">
        <HStack flexWrap="wrap" spacing="8px" display="flex">
          {["sm", "md", "lg", "md", "lg", "md", "lg", "md", "lg"].map(
            (size, index) => (
              <Tag
                backgroundColor={"yellowgreen"}
                size="lg"
                key={index}
                variant="solid"
                colorScheme="teal"
              >
                Teal
              </Tag>
            )
          )}
        </HStack>
      </Box>
    </div>
  );
});
TagItem.displayName = "TagItem";
export default TagItem;
