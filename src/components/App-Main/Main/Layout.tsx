"use client";

import React, { memo } from "react";
import MainLayout from "./components/MainLayout";

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
export async function getBlogs() {
  console.log(1);

  const res = await fetch("https://lancao.usemock.com/blog/blogs", {
    cache: "no-store",
  });
  console.log("layout");

  return res.json();
}
export async function getSite() {
  const res = await fetch("https://lancao.usemock.com/blog/site", {
    next: { revalidate: 30 },
  });
  return res.json();
}
Layout.displayName;
export default Layout;
