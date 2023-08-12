"use client";
import React, { memo } from "react";
import { FriendsWarpper } from "./style";
import {
  Box,
  Card,
  VStack,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
const page = memo(() => {
  return (
    <FriendsWarpper>
      <Card w="864px" display="flex" backgroundColor="#fff" alignItems="center">
        <VStack align="stretch">
          <Box
            borderBottom={"1px solid black"}
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
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <Box
                  borderRadius={5}
                  key={index}
                  marginTop={"10px"}
                  w={260}
                  h={170}
                  bgColor={"red"}
                >
                  <VStack>
                    <Box padding={2}>
                      <Image
                        borderRadius="full"
                        boxSize="70px"
                        src="http://kazemae-blog-01.oss-cn-beijing.aliyuncs.com/aurora/avatar/43fe1698e67caa0f634efe999d70cd2c.jpg"
                        alt="Dan Abramov"
                      />
                    </Box>
                    <Box>
                      <Text color={"#fff"}>蓝草</Text>
                    </Box>
                    <Box>
                      <Text color={"#fff"}>游龙当归海，海不迎我自来也</Text>
                    </Box>
                  </VStack>
                </Box>
              );
            })}
          </Box>
          <hr />
          <VStack align="stretch" padding={"0 20px"}>
            <Text>随机排序，不分先后。欢迎交换友链~(￣▽￣)~*</Text>
            <Box display={"flex"} justifyContent={"flex-start"}>
              <UnorderedList>
                <ListItem>昵称：Naccl</ListItem>
                <ListItem>一句话：游龙当归海，海不迎我自来也。</ListItem>
                <ListItem>网址：https://naccl.top</ListItem>
                <ListItem>头像URL：https://naccl.top/img/avatar.jpg</ListItem>
              </UnorderedList>
            </Box>
            <Text>
              仅凭个人喜好添加友链，请在收到我的回复邮件后再于贵站添加本站链接。原则上已添加的友链不会删除，如果你发现自己被移除了，恕不另行通知，只需和我一样做就好。
            </Text>
          </VStack>
          <hr className="hr"/>
        </VStack>
      </Card>
    </FriendsWarpper>
  );
});
page.displayName;
export default page;
