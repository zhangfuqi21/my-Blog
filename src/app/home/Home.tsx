"use client";
import React, { memo } from "react";
// import { prisma } from "@/db";
import { HomeWarpper } from "./style";
import ReadItem from "@/components/ReadItem/ReadItem";

const page = memo(async (props: any) => {
  const { data } = props;
  return (
    <HomeWarpper>
      {data.list.map((item: any, index: number) => {
        // return <CardItem details={false} list={item} key={index} />;
        return <ReadItem list={item} key={index} />;
      })}
    </HomeWarpper>
  );
});
page.displayName = "page";
export default page;
