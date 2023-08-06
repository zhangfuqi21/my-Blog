import React, { memo } from "react";
import { HeaderWapper } from "./style";

interface IMyProps {
  name: string;
  spread?: [];
}

const AppHeader: React.FC<any> = memo((props) => {
  return (
    <HeaderWapper>
      <div className="header">
        <div className="ui container">
          <div className="item">
            <a href="/">
              <h3>Naccl`s Blog</h3>
            </a>
          </div>
          {props.list.map((item: { name: string }, index: number) => {
            return (
              <div className="item" key={index}>
                {item.name}
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
