"use client";
import React, { memo } from "react";
import { ArchivesWarpper } from "./style";
import { Timeline } from "antd";
import { Box, Card, Text } from "@chakra-ui/react";
const getArchives = async () => {
  const res = await fetch("https://lancao.usemock.com/blog/archives", {
    cache: "no-store",
  });

  return res.json();
};
const page = memo(async () => {
  let { data } = await getArchives();
  const List: any = [];
  for (const key in data.blogMap) {
    data.blogMap[key].label = key;
    data.blogMap[key].forEach((item: any) => {
      List.push({ label: key });
      List.push({ children: item.title });
    });
  }

  // data.blogMap.map((item: any, index: number) => {
  //   console.log(item);
  // });
  // data.blogMap.forEach((element: any) => {
  //   console.log(element);
  // });
  // console.log(items);

  return (
    <ArchivesWarpper>
      <Card w="864px" display="flex" backgroundColor="#fff" alignItems="center">
        <Box
          w={"100%"}
          borderBottom={"1px solid #e8e9e9 "}
          padding={"10px 0px"}
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text>文章归档</Text>
          <Text marginTop={3}>好! 目前共计 27 篇日志。 继续努力。</Text>
        </Box>
        <Box marginTop={10}>
          <Timeline pending="Recording..." mode={"left"} items={List} />
        </Box>
      </Card>
    </ArchivesWarpper>
  );
});
page.displayName;
export default page;
