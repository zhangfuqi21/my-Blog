"use client";
import React, { memo } from "react";
import { HomeWarpper } from "./style";
import CardItem from "./CardItem/CardItem";
import { getBlog } from "@/api/blog";

const page: React.FC = memo(async () => {
  const { data } = await getBlogs();
  console.log(data);

  return (
    <HomeWarpper>
      {data.data.list.map((item: any, index: number) => {
        return <CardItem list={item} key={index} />;
      })}
    </HomeWarpper>
  );
});
export async function getBlogs() {
  const res = await getBlog();

  return res;
}
page.displayName = "page";
export default page;
