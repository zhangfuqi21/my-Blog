import React, { memo } from "react";
import Blog from "./Blog";
const getMoments: any = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/blog?id=${id}`, {
    cache: "no-store",
  });

  return res.json();
};
const page = memo(async ({ params }: { params: { slug: string } }) => {
  const id = decodeURIComponent(params.slug);

  const res = await getMoments(id);
  console.log(res);

  return (
    <div>
      <Blog id={id} list={res}></Blog>
    </div>
  );
});
page.displayName;
export default page;
