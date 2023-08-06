import React, { memo } from "react";
import { MainWarpper } from "./style";
import { Card, CardBody, Image, Stack } from "@chakra-ui/react";
const HomeMain = memo(() => {
  return (
    <MainWarpper>
      <div className="ui container">
        <Card>
          <Image
            src="https://naccl.top/img/avatar.jpg"
            boxSize="265px"
            alt="Green double couch with wooden legs"
          ></Image>
        </Card>
      </div>
      <Stack></Stack>
    </MainWarpper>
  );
});
HomeMain.displayName = "HomeMain";
export default HomeMain;
