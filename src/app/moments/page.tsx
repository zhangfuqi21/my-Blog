"use client";
import React, { memo, useState, useEffect } from "react";
import { MomentsWarpper } from "./style";
import { Card, VStack, Box, Text, Image } from "@chakra-ui/react";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const page = memo(() => {
  const [isRender, setIsRender] = useState(false);
  useEffect(() => {
    setIsRender(localStorage.getItem("likeMomentIds") === "like");
  }, [isRender]);
  const like = () => {
    window.localStorage.setItem("likeMomentIds", "like");
    if (window.localStorage.getItem("likeMomentIds") === "like") {
      setIsRender(true);
    }
  };

  return (
    <MomentsWarpper>
      <Card
        padding={"0 0px"}
        margin="0 10px"
        w="864px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <VStack align="stretch" w={"100%"}>
          <Box
            marginTop={2}
            paddingBottom={3}
            borderBottom={"1px solid #e8e9e9"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Text fontSize="3xl">我的动态</Text>
          </Box>
          <Box
            position={"relative"}
            margin={"0 50px"}
            marginTop={"5"}
            borderLeft={"1px solid #e8e9e9"}
          >
            {/* <Box className="pd10">
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
                  <Box fontSize={12}>2022-05-18 22:49</Box>
                </Box>
                <Box
                  paddingLeft={5}
                  paddingRight={3}
                  borderBottom={"1px solid #e8e9e9"}
                >
                  <Text>
                    国内网络环境真是令人反胃，cdn.jsdelivr.net也被墙了，啥时候干脆把出国海底光缆都物理切断得了，晦气
                  </Text>
                </Box>
                <Box paddingLeft={5} paddingRight={3}>
                  <HeartFilled className="love" />

                  <HeartOutlined />
                </Box>
              </VStack>
            </Box> */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
              return (
                <Box key={index} className="pd10">
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
                      <Box fontSize={12}>2022-05-18 22:49</Box>
                    </Box>
                    <Box
                      paddingLeft={5}
                      paddingRight={3}
                      borderBottom={"1px solid #e8e9e9"}
                    >
                      <Text>
                        国内网络环境真是令人反胃，cdn.jsdelivr.net也被墙了，啥时候干脆把出国海底光缆都物理切断得了，晦气
                      </Text>
                    </Box>
                    <Box paddingLeft={5} paddingRight={3}>
                      {isRender ? (
                        <HeartFilled className="love" />
                      ) : (
                        <HeartOutlined onClick={like} />
                      )}
                      444
                    </Box>
                  </VStack>
                </Box>
              );
            })}
          </Box>
        </VStack>
      </Card>
    </MomentsWarpper>
  );
});
page.displayName;
export default page;
