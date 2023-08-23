import CardItem from "@/app/home/CardItem/CardItem";
import React from "react";

export default function Page(props: any) {
  const { data } = props.list;
  console.log(data);

  return (
    <div>
      <CardItem list={data}></CardItem>
    </div>
  );
}
