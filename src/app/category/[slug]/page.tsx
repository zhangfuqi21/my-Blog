import React from "react";
import Category from "./Category";
import type { Metadata } from "next";
const getCategory = async (name: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/category?categoryName=${name}`,
    {
      cache: "no-store",
    }
  );

  return res.json();
};
export const metadata: Metadata = {
  title: "分类-Lancao`s",
  description: "Generated by create next app",
};
export default async function Page({ params }: { params: { slug: string } }) {
  const name = decodeURIComponent(params.slug);
  const res = await getCategory(name);
  return <Category name={name} list={res} />;
}
