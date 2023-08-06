"use client";
/** @jsxImportSource @emotion/react */
import React, { memo } from "react";
import { css } from "@emotion/react";
import AppHeader from "../../components/App-Header/AppHeader";
import HomeMain from "./components/HomeMain";
export async function getProjects() {
  const res = await fetch("https://lancao.usemock.com/headerList");
  const listSSR = await res.json();
  return listSSR;
}
const page: React.FC = memo(async (props) => {
  const listSSR = await getProjects();

  return (
    <div>
      <AppHeader list={listSSR.data} />
      <div
        css={css`
          background-image: url(https://cdn.naccl.top/blog/img/bg1.jpg);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -999;
          zoom: 1;
          background-repeat: no-repeat;
          background-size: cover;
          -webkit-background-size: cover;
          -o-background-size: cover;
          background-position: center 0;
        `}
      />
      <HomeMain />
    </div>
  );
});
page.displayName = "page";
export default page;
