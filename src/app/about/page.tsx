"use client";

import {
  Box,
  Card,
  VStack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { AboutWarpper } from "./style";

const page: React.FC = memo(async () => {
  return (
    <AboutWarpper>
      <Card
        padding={"0 20px"}
        margin="0 10px"
        w="864px"
        display="flex"
        backgroundColor="#fff"
        alignItems="center"
      >
        <VStack align="stretch">
          <Box w={"100%"} display={"flex"} justifyContent={"center"}>
            <Text fontSize="3xl">Lancao</Text>
          </Box>
          <Box>
            <iframe
              frameBorder="no"
              width="809"
              height="90"
              src="//music.163.com/outchain/player?type=2&id=2004904642&auto=1&height=66"
            ></iframe>
          </Box>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <Text
              w={"100%"}
              fontWeight={"700"}
              fontSize="xl"
              borderBottom={"1px solid black"}
            >
              目前可以公开的情报
            </Text>
          </Box>
          <Box display={"flex"} justifyContent={"flex-start"}>
            <UnorderedList>
              <ListItem>M E:已经是社畜了QAQ</ListItem>
              <ListItem>目标：做最酷的自己</ListItem>
              <ListItem>特征：兴趣至上</ListItem>
              <ListItem>爱好:写Bug、打游戏、看动漫</ListItem>
              <ListItem>性格:不喜约束、比较自私、偶尔emo</ListItem>
            </UnorderedList>
          </Box>
          <Text
            w={"100%"}
            fontWeight={"700"}
            fontSize="xl"
            borderBottom={"1px solid black"}
          >
            我 & 博客
          </Text>
          <Text>
            生性只对感兴趣的事物充满热情，看到有趣的软件都会情不自禁地分析一波技术栈，可能用到了什么
            algorithm，然后自我陶醉😅
          </Text>

          <Text>
            喜欢安静，但喜欢听得劲的电音，节奏控，coding
            时喜欢听嗨歌，没事就跟着摇一摇🎵
          </Text>
          <Text>奶盖要摇匀了喝！🥛</Text>
          <Text>世界上只有甜的豆腐脑🤗</Text>
          <Text>
            🍓NBlog个人博客系统，本是学习过程中的产物，没想到能受到大家的喜爱，如果你也喜欢本博客，⭐️就是最好的鼓励
          </Text>
          <Text>
            博客现在托管在阿里云学生机，因为水管比较小，静态资源托管在
            GitHub，通过 jsDelivr CDN减速已迁至又拍云🚀
          </Text>
          <Text>
            博客源码、部署相关疑难杂症请在 GitHub 提 issue，请勿在本博客留言
          </Text>
          <Text>
            如需联系我，请尽量使用 TG 或邮件，thanks（评论我也会收到提醒）
          </Text>
        </VStack>
      </Card>
    </AboutWarpper>
  );
});
page.displayName = "page";
export default page;
