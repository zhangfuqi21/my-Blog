"use client";
import React, { memo } from "react";
import { HomeWarpper } from "./style";
import CardItem from "./CardItem/CardItem";
async function getBlogs() {
  const res = await fetch("https://lancao.usemock.com/blog/blogs", {
    cache: "no-store",
  });
  console.log("home blog");

  return res.json();
}
const page: React.FC = memo(async () => {
  const { data } = await getBlogs();
  return (
    <HomeWarpper>
      {data.list.map((item: any, index: number) => {
        return <CardItem list={item} key={index} />;
      })}
    </HomeWarpper>
  );
});
page.displayName = "page";
export default page;
