"use client";

import React, { memo } from "react";
import MainLayout from "./components/MainLayout";
async function getBlogs() {
  const res = await fetch("https://lancao.usemock.com/blog/blogs");
  return res.json();
}
async function getSite() {
  const res = await fetch("https://lancao.usemock.com/blog/site");
  return res.json();
}
const Layout = memo(async (props) => {
  const [blogsList, siteList] = await Promise.all([
    // await getProjects(),
    await getBlogs(),
    await getSite(),
  ]);
  return (
    <div>
      <MainLayout site={siteList.data} list={blogsList.data}>
        {props}
      </MainLayout>
    </div>
  );
});
Layout.displayName;
export default Layout;
