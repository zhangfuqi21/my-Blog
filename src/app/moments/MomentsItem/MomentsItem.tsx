"use client";
import { Box, Image, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import React, { memo, useEffect } from "react";

const MomentsItem = memo((props: any) => {
  const like = async (id: any) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API}/moment/like/${id}`,
      {
        method: "post",
      }
    ).then((res) => {
      return res.json();
    });
    if (res.code == "200") {
      if (typeof window !== "undefined") {
        if (window.localStorage.getItem("likeMomentIds") == null) {
          const arr: any[] = [];
          arr.push(id);
          window.localStorage.setItem("likeMomentIds", JSON.stringify(arr));
        } else {
          var arr = JSON.parse(localStorage.getItem("likeMomentIds") || "0");
          console.log(arr);

          if (arr.indexOf(id) == -1) {
            arr.push(id);
          } else {
            console.log("已经点赞：", arr.indexOf(id));
          }
          window.localStorage.setItem("likeMomentIds", JSON.stringify(arr));
        }
      }
    } else {
      console.log("点赞失败");
    }
  };
  const isBrowser = () => typeof window !== "undefined";
  console.log(isBrowser());

  const isok = (id: any) => {
    if (isBrowser()) {
      var arr = JSON.parse(window.localStorage.getItem("likeMomentIds") || "0");
      console.log(arr);

      if (arr !== 0) {
        if (arr.indexOf(id) == -1) {
          return false;
        } else {
          return true;
        }
      }
    }
  };
  return (
    <Box className="pd10">
      <Box className="pd10">
        <Image
          position={"absolute"}
          borderRadius="full"
          left={"-22.5px"}
          boxSize="45px"
          src="https://naccl.top/img/avatar.jpg"
          alt=""
        />
      </Box>
      <VStack
        borderRadius={5}
        border={"1px solid #e8e9e9"}
        marginLeft={10}
        align="flex-start"
      >
        <Box
          h={"40px"}
          paddingLeft={5}
          paddingRight={3}
          w={"100%"}
          borderBottom={"1px solid #e8e9e9"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box fontSize={14} fontWeight={700}>
            lancao
          </Box>
          <Box fontSize={12}>
            {dayjs(props.list.createTime).format("YYYY/MM/DD")}
          </Box>
        </Box>
        <Box
          w={"100%"}
          paddingLeft={5}
          paddingRight={3}
          borderBottom={"1px solid #e8e9e9"}
        >
          {/* <Text>

                        {item.content}
                        </Text> */}

          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: props.list.content }}
          ></div>
        </Box>
        <Box paddingLeft={5} paddingRight={3}>
          {isok(props.list.id) ? (
            <HeartFilled className="love" />
          ) : (
            <HeartOutlined onClick={() => like(props.list.id)} />
          )}
          {props.list.likes}
        </Box>
      </VStack>
    </Box>
  );
});
MomentsItem.displayName;
export default MomentsItem;
