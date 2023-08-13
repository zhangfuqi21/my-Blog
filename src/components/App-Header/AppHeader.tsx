import React, { memo, useEffect, useState } from "react";
import classnames from "classnames";
import { HeaderWapper } from "./style";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface IMyProps {
  name: string;
  spread?: [];
}

const AppHeader: React.FC<any> = memo((props) => {
  const router = usePathname();
  const [isScroll, setisScroll] = useState(false);
  useEffect(() => {
    UsehandleScrool();
    window.addEventListener("scroll", UsehandleScrool);
  });
  const UsehandleScrool = () => {
    let scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    if (router == "/home") {
      if (scrollTop > 500) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    } else {
      setisScroll(true);
    }
  };
  return (
    <HeaderWapper>
      <div className={classnames("header", { black: isScroll })}>
        <div className="ui container">
          <div className={classnames("item", { itemb: isScroll })}>
            <a href="/">
              <Text fontSize="lg" color={"#48dbfb"}>
                Lancao`s Blog
              </Text>
            </a>
          </div>
          {props.list.map((item: any, index: number) => {
            return (
              <div key={index}>
                {item.spread.length != 0 && (
                  <Menu isLazy id="menu-islazy">
                    <MenuButton
                      id="MenuButton111"
                      fontSize={14}
                      w={"60px"}
                      h={51}
                      bgColor={"rgba(255,255,255,0)"}
                      color={"#fff"}
                    >
                      {item.name}
                    </MenuButton>
                    <MenuList
                      id="MenuList222"
                      fontSize={14}
                      minW={0}
                      w={"90px"}
                      border={0}
                      bgColor={"#1b1c1d"}
                    >
                      {item.spread.map((item: any) => {
                        return (
                          <MenuItem
                            id={`MenuItem-${item.key}`}
                            key={item.key}
                            color={"#fff"}
                            bgColor={"#1b1c1d"}
                          >
                            <Link href={`/category/${item.path}`}>{item.label}</Link>
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                )}
                {item.spread.length === 0 && (
                  <div className={classnames("item", { itemb: isScroll })}>
                    <Link href={item.path}>{item.name}</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </HeaderWapper>
  );
});
AppHeader.displayName = "AppHeader";
export default AppHeader;
