import React, { memo } from "react";
import MainLayout from "./components/MainLayout";
const Layout = memo(async (props) => {
  const [blogsList, siteList] = await Promise.all([
    await getBlogs(),
    await getSite(),
  ]);
  console.log(siteList.data);

  return (
    <div>
      <MainLayout site={siteList.data} list={blogsList.data}>
        {props}
      </MainLayout>
    </div>
  );
});
export async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blogs`, {
    // cache: "force-cache",
  });
  return res.json();
}
export async function getSite() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/site`, {
    // cache: "force-cache",
  });
  return res.json();
}
Layout.displayName;
export default Layout;
