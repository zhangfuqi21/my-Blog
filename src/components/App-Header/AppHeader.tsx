import React, { memo, useEffect, useState } from "react";
import classnames from "classnames";
import { HeaderWapper } from "./style";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
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
              <div
                className={classnames("item", { itemb: isScroll })}
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
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
