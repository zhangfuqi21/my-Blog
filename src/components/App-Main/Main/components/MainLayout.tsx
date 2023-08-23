"use client";
import React, { memo, useEffect, useState } from "react";
import "@/assets/iconfont/iconfont.css";
import { useDispatch } from "react-redux";

import HomeLeftCard from "../../LeftCard/HomeLeftCard";
import HomeRightCard from "../../RightCard/HomeRightCard";
import { setBlogs, setSite } from "@/store/modules/home";
import { LayoutWarpper } from "../style";
const MainLayout = memo((props: any) => {
  const [isScroll, setisScroll] = useState(false);
  const dispatch = useDispatch();
  const list = props.list.list;
  const site = props.site;
  useEffect(() => {
    UsehandleScrool();
    window.addEventListener("scroll", UsehandleScrool);
  });
  const UsehandleScrool = () => {
    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);

    if (scrollTop > 250) {
      setisScroll(true);
    } else {
      setisScroll(false);
    }
  };
  if (list && site) {
    dispatch(setSite(site));
    dispatch(setBlogs(list));
  }
  const GoTop = () => {
    let timer = setInterval(() => {
      //获取滑动的距离
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      window.scrollTo(0, Math.floor(top - top / 5)); //设置返回时 是缓慢带有动画的
      if (top == 0) {
        console.log(top);
        clearInterval(timer);
      }
    }, 30);
  };
  return (
    <LayoutWarpper>
      <div className="ui container">
        <HomeLeftCard list={site} />
        <div className="w">{props.children.children}</div>
        <div className="fixed" onClick={GoTop}>
          {isScroll ? <i className="iconfont icon-huidaodingbu" /> : ""}
        </div>
        <HomeRightCard />
      </div>
    </LayoutWarpper>
  );
});
MainLayout.displayName;
export default MainLayout;
