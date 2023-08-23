"use client";
import React, { memo } from "react";
import { FriendsWarpper } from "./style";
import { Box, Card, VStack, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import RandomColor from "@/utils/RandomColor";

const Friends = memo(async (props: any) => {
  const list = props.list;
  return (
    <FriendsWarpper>
      <Card
        w="864px"
        display="flex"
        padding={"0 0px"}
        margin="0 10px"
        backgroundColor="#fff"
        alignItems="center"
      >
        <VStack align="stretch">
          <Box
            borderBottom={"1px solid #e8e9e9"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
          >
            <Text fontSize="3xl">小伙伴</Text>
          </Box>
          <Box
            padding={"0 20px"}
            justifyContent="space-around"
            display={"flex"}
            flexWrap={"wrap"}
          >
            {list.data.friendList.map((item: any, index: number) => {
              return (
                <Link key={index} href={item.website}>
                  <Box
                    borderRadius={5}
                    marginTop={"10px"}
                    w={260}
                    h={170}
                    bgColor={RandomColor()}
                  >
                    <VStack>
                      <Box padding={2}>
                        <Image
                          borderRadius="full"
                          boxSize="70px"
                          src={item.avatar}
                          alt="Dan Abramov"
                        />
                      </Box>
                      <Box>
                        <Text color={"#fff"}>{item.nickname}</Text>
                      </Box>
                      <Box>
                        <Text color={"#fff"}>{item.description}</Text>
                      </Box>
                    </VStack>
                  </Box>
                </Link>
              );
            })}
          </Box>
          <hr />
          <VStack align="stretch" padding={"0 40px"}>
            <div
              dangerouslySetInnerHTML={{ __html: list.data.friendInfo.content }}
            ></div>
          </VStack>
          <hr className="hr" />
        </VStack>
      </Card>
    </FriendsWarpper>
  );
});
Friends.displayName;
export default Friends;
