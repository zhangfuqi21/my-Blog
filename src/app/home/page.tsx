"use client";

import React, { memo } from "react";
import { HomeWarpper } from "./style";
import HomeMain from "./components/HomeMain";
// import { useDispatch } from "react-redux";
// import { WithRedux } from "@/store/withRedux";
// async function getProjects() {
//   const res = await fetch("https://lancao.usemock.com/headerList");
//   return res.json();
// }
async function getBlogs() {
  const res = await fetch("https://lancao.usemock.com/blog/blogs");
  return res.json();
}
async function getSite() {
  const res = await fetch("https://lancao.usemock.com/blog/site");
  return res.json();
}
const page: React.FC = memo(async (props) => {
  const [blogsList, siteList] = await Promise.all([
    // await getProjects(),
    await getBlogs(),
    await getSite(),
  ]);

  return (
    // <WithRedux>
    <HomeWarpper>
      {/* <AppHeader list={listSSR.data} /> */}
      <div className="bg" />
      <HomeMain site={siteList.data} list={blogsList.data} />
    </HomeWarpper>
    // </WithRedux>
  );
});
page.displayName = "page";
export default page;
