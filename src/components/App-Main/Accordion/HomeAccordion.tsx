"use client";
import React, { memo } from "react";
import { AccordionWarpper } from "./style";
// import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { shallowEqual, useSelector } from "react-redux";

const HomeAccordion = memo(() => {
  const list = useSelector((store: any) => store.home.site, shallowEqual);
  console.log(list);

  const newList = list.introduction.favorites.map((item: any, index: any) => {
    const r = {
      key: index + 1,
      label: item.title,
      children: <p>{item.content}</p>,
    };
    return r;
  });

  return (
    <AccordionWarpper>
      <Collapse bordered={false} accordion items={newList} />
    </AccordionWarpper>
  );
});
HomeAccordion.displayName = "HomeAccordion";
export default HomeAccordion;
