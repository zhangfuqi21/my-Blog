"use client";
import React, { memo } from "react";
import { HomeWarpper } from "./style";
import AppHeader from "../../components/App-Header/AppHeader";
import HomeMain from "./components/HomeMain";
async function getProjects() {
  const res = await fetch("https://lancao.usemock.com/headerList");

  const listSSR = await res.json();
  return listSSR;
}
const page: React.FC = memo(async (props) => {
  const listSSR = await getProjects();

  return (
    <HomeWarpper>
      <AppHeader list={listSSR.data} />
      <div className="bg" />
      <HomeMain />
    </HomeWarpper>
  );
});
page.displayName = "page";
export default page;
