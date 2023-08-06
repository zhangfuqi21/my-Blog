import React, { memo } from "react";
import { MainWarpper } from "./style";
import "@/assets/iconfont/iconfont.css";

import HomeLeftCard from "./HomeLeftCard/HomeLeftCard";
import HomeMidCard from "./HomeMidCard/HomeMidCard";
import HomeRightCard from "./HomeRightCard/HomeRightCard";
const HomeMain = memo(() => {
  return (
    <MainWarpper>
      <div className="ui container">
        <HomeLeftCard />
        <div className="w">
          <HomeMidCard />
          <HomeMidCard />
        </div>
        <HomeRightCard />
      </div>
    </MainWarpper>
  );
});
HomeMain.displayName = "HomeMain";
export default HomeMain;
