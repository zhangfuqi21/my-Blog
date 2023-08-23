import React, { memo } from "react";
import { FotterWarpper } from "./style";
import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";
import { Box, HStack, VStack, Image, Text } from "@chakra-ui/react";
const AppFotter: React.FC = memo(() => {
  const list = useSelector((store: any) => store.home.site, shallowEqual);
  console.log(list.newBlogList);

  return (
    <FotterWarpper>
      <footer>
        <Box w={1156}>
          <VStack>
            <HStack spacing="0px">
              <Box w={216} h={162} borderRight={"1px solid #444546"}>
                <VStack>
                  <Text color={"#fff"} marginTop={4}>
                    {list.siteInfo?.footerImgTitle}
                  </Text>
                  <Image
                    boxSize={100}
                    borderRadius={5}
                    src="https://img1.imgtp.com/2023/08/09/dTWL4NGD.png"
                    alt="1"
                  />
                </VStack>
              </Box>
              <Box w={433} height={162} borderRight={"1px solid #444546"}>
                <VStack marginTop={4}>
                  <Text color={"#fff"}>最新博客</Text>
                  {list.newBlogList?.map((item: any, index: number) => {
                    if (index < 3) {
                      return (
                        <Link href={`/blog/${item.id}`} key={item.id}>
                          <Text color={"#aeb1b1"} marginTop={1}>
                            {item.title}
                          </Text>{" "}
                        </Link>
                      );
                    }
                  })}
                </VStack>
              </Box>
              <Box w={505} height={162}>
                <VStack marginTop={4}>
                  <Box color={"#fff"}>
                    前天我遇见了小兔，昨天遇见了小鹿，今天则遇见了你。
                  </Box>
                  <Box w={"100%"}>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      color={"#fff"}
                    >
                      ——《CLANNAD》
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </HStack>

            <HStack
              display={"flex"}
              justifyContent={"center"}
              borderTop={"1px solid #444546"}
              w={"100%"}
              paddingTop={10}
            >
              <Text fontWeight={700} fontSize={16} color={"#7c7d7d"}>
                {list.siteInfo?.copyright.title}
              </Text>
              <Text fontWeight={700} fontSize={16} color={"#aa9c22"}>
                {list.siteInfo?.blogName}
              </Text>
              <Text fontWeight={700} fontSize={16} color={"#989999"}>
                本网站由 又拍云 提供云存储服务
              </Text>
              <Text fontWeight={700} fontSize={16} color={"#8f8525"}>
                闽ICP备20005222号
              </Text>
            </HStack>
            <HStack>
              {list.badges?.map((item: any, index: number) => {
                return (
                  <Box
                    key={index}
                    borderRadius={5}
                    overflow={"hidden"}
                    color={"#fff"}
                    fontSize={12}
                    display={"flex"}
                  >
                    <Link className="link" href={item.url}>
                      <Box padding={"1"} bgColor={"#5f5f5f"}>
                        {item.subject}
                      </Box>
                      <Box padding={"1"} bgColor={item.color}>
                        {item.value}
                      </Box>
                    </Link>
                  </Box>
                );
              })}
            </HStack>
          </VStack>
        </Box>
      </footer>
    </FotterWarpper>
  );
});
AppFotter.displayName = "AppFotter";
export default AppFotter;
