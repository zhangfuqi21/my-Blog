"use client";

import { Card, Text } from "@chakra-ui/react";
import React from "react";
import CardItem from "@/app/home/CardItem/CardItem";
export default function Page({ params }: { params: { slug: string } }) {
  const name = decodeURIComponent(params.slug);
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
          {" "}
          分类{name}下的文章
        </Text>
      </Card>
      {/* <CardItem></CardItem> */}
    </div>
  );
  //    <div>My Post: {params.slug}</div>;
}
