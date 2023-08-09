"use client";
import React, { memo } from "react";
import { MainWarpper } from "./style";
import "@/assets/iconfont/iconfont.css";
import { useDispatch } from "react-redux";

import HomeLeftCard from "./HomeLeftCard/HomeLeftCard";
import HomeMidCard from "./HomeMidCard/HomeMidCard";
import HomeRightCard from "./HomeRightCard/HomeRightCard";
import { setBlogs, setSite } from "@/store/modules/home";
const HomeMain = memo((props: any) => {
  const dispatch = useDispatch();
  const list = props.list.list;
  const site = props.site;

  if (list && site) {
    dispatch(setSite(site));
    dispatch(setBlogs(list));
  }

  return (
    <MainWarpper>
      <div className="ui container">
        <HomeLeftCard list={site} />
        <div className="w">
          {list.map((item: any) => {
            return <HomeMidCard list={item} key={item.id} />;
          })}
        </div>
        <HomeRightCard />
      </div>
    </MainWarpper>
  );
});
HomeMain.displayName = "HomeMain";
export default HomeMain;
