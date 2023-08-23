import React, { memo } from "react";
import Archives from "./Archives";
import type { Metadata } from "next";
const getArchives: any = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/archives`, {
    cache: "no-store",
  });

  return res.json();
};
export const metadata: Metadata = {
  title: "归档-Lancao`s",
  description: "Generated by create next app",
};
const page = memo(async () => {
  let { data } = await getArchives();
  return <Archives data={data} />;
});
page.displayName;
export default page;

// import React, { memo } from "react";

// const page = memo(() => {
//   return <div>page</div>;
// });
// page.displayName;
// export default page;
