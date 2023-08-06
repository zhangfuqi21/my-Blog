import React, { memo } from "react";
import { MidCardWarpper } from "./style";
import { Box, Card, VStack, Text, Image, Button } from "@chakra-ui/react";
const HomeMidCard = memo(() => {
  return (
    <MidCardWarpper>
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
            2022 年度总结
          </Text>
          <Box display="flex">
            <Text className="mg" fontSize="sm" color="#00a7e0">
              <i className="iconfont icon-rili" />
              <span className="mgleft">2022-12-31</span>
            </Text>
            <Text className="mg" fontSize="sm" color="#ff3f1f">
              <i className="iconfont icon-eye" />
              <span className="mgleft">3333</span>
            </Text>
            <Text className="mg" fontSize="sm">
              <i className="iconfont icon-Pen" />
              <span className="mgleft">字数≈963字</span>
            </Text>
            <Text className="mg" fontSize="sm">
              <i className="iconfont icon-time" />
              <span className="mgleft">阅读时长≈5分</span>
            </Text>
          </Box>
          <Box
            marginTop="40px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text>
              最近俄乌局势持续升级，刷推看到一些视频，俄军坦克冲撞并碾压在对向车道行驶中的乌民用车（又有消息说是乌军坦克，尚不知真假，但平民的确是乌克兰人）...一位乌克兰父亲含泪将妻儿送上前往安全地区的车（又证实是假消息，与文无关...这年头想看到真实的消息太难了，无论怎样，总归是值得思考的一件事吧）......唉，只能说珍惜当下的和平吧......
              又想起最近在写的鉴权服务中的非对称加密，思考现代战争中的通讯手段会如何进行加密呢？于是就搜到了这个问题，非对称密码学在二战中可行吗？
            </Text>
            <Box
              marginTop="30px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="https://cdn.naccl.top/blog/blogHosting/2022/02/B01/first.jpg"
                alt="Dan Abramov"
              />
              <Button marginTop="50px" colorScheme="teal" variant="outline">
                阅读全文
              </Button>
            </Box>
          </Box>
        </VStack>
        <Box display="flex" justifyContent="flex-start" paddingBottom={"20px"}>
          <Box
            w={"0"}
            h={"0"}
            borderRight={"16px solid #6435c9"}
            borderLeft={"16px solid transparent"}
            borderTop={"16px solid transparent"}
            borderBottom={"16px solid transparent"}
          ></Box>
          <Box
            color={"#fff"}
            lineHeight={"32px"}
            h={"32px"}
            backgroundColor={"#6435c9"}
            paddingRight={"15px"}
            paddingLeft={"10px"}
            borderRadius={"0 5px 5px 0px"}
          >
            心情随写
          </Box>
        </Box>
      </Card>
    </MidCardWarpper>
  );
});
HomeMidCard.displayName = "HomeMidCard";
export default HomeMidCard;
