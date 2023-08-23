import React, { memo } from "react";
import { Card, VStack, Text, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ItemWarpper } from "./style";
import dayjs from "dayjs";
import Link from "next/link";

const ReadItem = memo((props: any) => {
  const router = useRouter();
  const list = props.list;
  return (
    <ItemWarpper>
      <Card
        margin="0 10px"
        w="864px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <VStack
          margin="10px 10px"
          w="808px"
          paddingBottom="20px"
          borderBottom="1px solid #dededf"
        >
          <Text fontSize="2xl" fontWeight="700">
            {list.title}
          </Text>
          <Box display="flex">
            <Text className="mg" fontSize="sm" color="#00a7e0">
              <i className="iconfont icon-rili" />
              <span className="mgleft">
                {dayjs(list.createTime).format("YYYY/MM/DD")}
              </span>
            </Text>
            <Text className="mg" fontSize="sm" color="#ff3f1f">
              <i className="iconfont icon-eye" />
              <span className="mgleft">{list.views}</span>
            </Text>
            <Text className="mg" fontSize="sm">
              <i className="iconfont icon-Pen" />
              <span className="mgleft">字数≈{list.words}字</span>
            </Text>
            <Text className="mg" fontSize="sm">
              <i className="iconfont icon-time" />
              <span className="mgleft">阅读时长≈{list.readTime}分</span>
            </Text>
          </Box>
          <Box marginTop="40px">
            {list.description && (
              <div
                className="center"
                dangerouslySetInnerHTML={{ __html: list.description }}
              ></div>
            )}
            {list.content && (
              <div
                className="center"
                dangerouslySetInnerHTML={{ __html: list.content }}
              ></div>
            )}
            <Box
              marginTop="30px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Button
                onClick={() => router.push(`/blog/${list.id}`)}
                marginTop="50px"
                colorScheme="teal"
                variant="outline"
              >
                阅读全文
              </Button>
            </Box>
          </Box>
        </VStack>
        <Box display="flex" justifyContent="flex-start" paddingBottom={"20px"}>
          {list.tags.map((item: any, index: number) => {
            return (
              <Link href={`/tag/${item.name}`} key={index}>
                <Box display={"Flex"}>
                  <Box
                    w={"0"}
                    h={"0"}
                    borderRight={`16px solid ${item.color}`}
                    borderLeft={"16px solid transparent"}
                    borderTop={"16px solid transparent"}
                    borderBottom={"16px solid transparent"}
                  ></Box>
                  <Box
                    color={`#fff`}
                    lineHeight={"32px"}
                    h={"32px"}
                    backgroundColor={`${item.color}`}
                    paddingRight={"15px"}
                    paddingLeft={"10px"}
                    borderRadius={"0 5px 5px 0px"}
                  >
                    {item.name}
                  </Box>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Card>
    </ItemWarpper>
  );
});
ReadItem.displayName;
export default ReadItem;
