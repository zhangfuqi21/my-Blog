"use client";
import React, { memo } from "react";
import { MomentsWarpper } from "./style";
import { Card, VStack, Box, Text } from "@chakra-ui/react";
import MomentsItem from "./MomentsItem/MomentsItem";

const page = memo((props: any) => {
  const { list } = props;
  console.log(list.data.list);

  return (
    <MomentsWarpper>
      <Card
        padding={"0 0px"}
        margin="0 10px"
        w="864px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <VStack align="stretch" w={"100%"}>
          <Box
            marginTop={2}
            paddingBottom={3}
            borderBottom={"1px solid #e8e9e9"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Text fontSize="3xl">我的动态</Text>
          </Box>
          <Box
            position={"relative"}
            margin={"0 50px"}
            marginTop={"5"}
            borderLeft={"1px solid #e8e9e9"}
          >
            {list.data.list.map((item: any) => {
              return <MomentsItem key={item.id} list={item} />;
            })}
          </Box>
        </VStack>
      </Card>
    </MomentsWarpper>
  );
});
page.displayName;
export default page;
