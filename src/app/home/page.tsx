"use client";
import React, { memo } from "react";
import { HomeWarpper } from "./style";
import CardItem from "./CardItem/CardItem";
export async function getBlogs() {
  const res = await fetch("https://lancao.usemock.com/blog/blogs", {
    next: { revalidate: 30 },
  });
  console.log("home");

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
