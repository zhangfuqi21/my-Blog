"use client";

import React, { memo, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { HeaderWapper } from "./style";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Skeleton,
} from "@chakra-ui/react";
const AppHL: React.FC<any> = memo((props) => {
  const router = usePathname();
  const [isScroll, setisScroll] = useState(false);
  const isRender = () => {
    if (props.list.length) {
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
                          {props.sort.data.categoryList.map(
                            (item: any, index: number) => {
                              return (
                                <MenuItem
                                  key={index}
                                  color={"#fff"}
                                  bgColor={"#1b1c1d"}
                                >
                                  <Link href={`/category/${item.name}`}>
                                    {item.name}
                                  </Link>
                                </MenuItem>
                              );
                            }
                          )}
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
    } else {
      return <Skeleton height="20px" />;
    }
  };

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
  return isRender();
});
AppHL.displayName = "AppHL";
export default AppHL;
