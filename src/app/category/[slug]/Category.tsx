"use client";
import React, { memo } from "react";
import { Card, Text } from "@chakra-ui/react";
import ReadItem from "@/components/ReadItem/ReadItem";
const Category = memo((props: any) => {
  const { name, list } = props;

  return (
    <div>
      <Card
        padding={"0 0px"}
        margin="0 10px"
        w="864px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <Text padding={"12px 0"} fontSize="2xl">
          分类{name}下的文章
        </Text>
      </Card>
      {list.data.list.map((item: any, index: number) => {
        return <ReadItem list={item} key={index} />;
      })}
    </div>
  );
});
Category.displayName;
export default Category;
