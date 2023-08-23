"use client";
import React, { memo } from "react";
import { Timeline } from "antd";
import { Box, Card, Text } from "@chakra-ui/react";
import { ArchivesWarpper } from "./style";
const Archives = memo(async (props: any) => {
  const { data } = props;
  const List: any = [];
  for (const key in data.blogMap) {
    data.blogMap[key].label = key;
    data.blogMap[key].forEach((item: any) => {
      List.push({ label: key });
      List.push({ children: item.title });
    });
  }

  return (
    <ArchivesWarpper>
      <Card
        w="864px"
        padding={"0 0px"}
        margin="0 10px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <Box
          w={"100%"}
          borderBottom={"1px solid #e8e9e9 "}
          padding={"10px 0px"}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text>文章归档</Text>
          <Text marginTop={3}>
            好! 目前共计 {data.count} 篇日志。 继续努力。
          </Text>
        </Box>
        <Box marginTop={10}>
          <Timeline pending="Recording..." mode={"left"} items={List} />
        </Box>
      </Card>
    </ArchivesWarpper>
  );
});
Archives.displayName;
export default Archives;
