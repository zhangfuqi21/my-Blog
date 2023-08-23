"use client";
import {
  Card,
  VStack,
  Text,
  Box,
  Button,
  UnorderedList,
  ListItem,
  Textarea,
  Input,
  useToast,
  useDisclosure,
  Fade,
  Image,
} from "@chakra-ui/react";
import { CardItemWarpper } from "./style";
import React, { memo, useRef } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { POSTComment, GetComment } from "@/api/blog";
import Link from "next/link";
const CardItem = memo((props: any) => {
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  let review = useRef("");
  let name = useRef("");
  let eamil = useRef("");
  let http = useRef("");
  const list = props.list;
  const handelChange = (e: any, type: any) => {
    switch (type) {
      case "text":
        review = e.target.value;
        break;
      case "name":
        name = e.target.value;
        break;
      case "email":
        eamil = e.target.value;
        break;
      case "http":
        http = e.target.value;
        break;
    }
  };
  const add = async () => {
    const data = {
      blogId: list.id,
      content: review,
      email: eamil,
      nickname: name,
      notice: true,
      page: 0,
      parentCommentId: -1,
      website: "",
    };
    console.log(data);
    const res = await POSTComment(data);
    console.log(res);
    if (res.data.code == 200) {
      toast({
        title: `${res.data.msg}`,
        position: "top-right",
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: `${res.data.msg}`,
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <CardItemWarpper>
      {
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
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  position={"relative"}
                >
                  <Fade in={isOpen}>
                    <Box
                      w={170}
                      h={170}
                      rounded="md"
                      shadow="md"
                      position={"absolute"}
                      // top={100}
                      top={-150}
                      right={-14}
                    >
                      <Image
                        boxSize={170}
                        src="http://zblog-image.test.upcdn.net/vx.jpg"
                        alt="VX"
                      />
                    </Box>
                  </Fade>
                  <Button
                    // onClick={() => router.push(`/blog/${list.id}`)}
                    onClick={onToggle}
                    marginTop="50px"
                    colorScheme="teal"
                    variant="outline"
                  >
                    赞赏
                  </Button>
                </Box>
              </Box>
            </Box>
          </VStack>
          <Box
            display="flex"
            justifyContent="flex-start"
            paddingBottom={"20px"}
          >
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
          <Box
            w={"100%"}
            padding={"15px 20px"}
            bgColor={"#fcfff5"}
            border={"1px solid #a3c293"}
            borderBottom={"2px solid #00b5ad"}
            fontSize={14}
          >
            <UnorderedList>
              <ListItem>作者：Lancao</ListItem>
              <ListItem>
                {dayjs(list.createTime).format("YYYY-MM-DD HH:mm:ss")}
              </ListItem>
              <ListItem>
                {dayjs(list.updateTime).format("YYYY-MM-DD HH:mm:ss")}
              </ListItem>
              <ListItem>
                本站点采用 署名 4.0 国际 (CC BY 4.0)
                创作共享协议。可自由转载、引用，并且允许商业性使用。但需署名作者且注明文章出处。
              </ListItem>
            </UnorderedList>
          </Box>
          <Box w={"100%"}>
            <VStack spacing={4} align="stretch" padding={"20px"}>
              <Text fontSize="lg">发表评论</Text>
              <Textarea
                placeholder="善语结善缘，恶语伤人心"
                onChange={(e) => handelChange(e, "text")}
              />
              <Box display={"flex"} justifyContent={"space-evenly"}>
                <Input
                  w={180}
                  h={"32px"}
                  placeholder="昵称 (必填)"
                  onChange={(e) => handelChange(e, "name")}
                />
                <Input
                  w={180}
                  h={"32px"}
                  placeholder="邮箱 (必填)"
                  onChange={(e) => handelChange(e, "email")}
                />
                <Input
                  w={180}
                  h={"32px"}
                  placeholder="https:// (可选)"
                  onChange={(e) => handelChange(e, "http")}
                />
                <Button onClick={() => add()}>发表评论</Button>
              </Box>
            </VStack>
          </Box>
        </Card>
      }
    </CardItemWarpper>
  );
});
CardItem.displayName;
export default CardItem;
