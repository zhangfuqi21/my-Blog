// "use client";

import React, { memo } from "react";
import AppHL from "./AppHL";
const getMoments = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/site`, {
    cache: "force-cache",
  });
  return res.json();
};
const AppHeader: React.FC<any> = memo(async (props) => {
  const sort = await getMoments();
  const { list } = props;

  return <AppHL list={list} sort={sort} />;
});
AppHeader.displayName = "AppHeader";
export default AppHeader;
