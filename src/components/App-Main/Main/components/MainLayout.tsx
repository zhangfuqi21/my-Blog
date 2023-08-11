"use client";
import React, { memo } from "react";
import "@/assets/iconfont/iconfont.css";
import { useDispatch } from "react-redux";

import HomeLeftCard from "../../LeftCard/HomeLeftCard";
import HomeRightCard from "../../RightCard/HomeRightCard";
import { setBlogs, setSite } from "@/store/modules/home";
import { LayoutWarpper } from "../style";
const MainLayout = memo((props: any) => {
  const dispatch = useDispatch();
  const list = props.list.list;
  const site = props.site;
  if (list && site) {
    dispatch(setSite(site));
    dispatch(setBlogs(list));
  }

  return (
    <LayoutWarpper>
      <div className="ui container">
        <HomeLeftCard list={site} />
        <div className="w">{props.children.children}</div>
        <HomeRightCard />
      </div>
    </LayoutWarpper>
  );
});
MainLayout.displayName;
export default MainLayout;
