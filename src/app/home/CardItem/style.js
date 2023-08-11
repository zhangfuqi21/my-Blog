import styled from "@emotion/styled";

export const CardItemWarpper = styled.div`
  :nth-child(n + 2) {
    margin-top: 50px;
  }
  .mg {
    margin: 0 4px;
  }
  .iconfont {
    font-size: 12px;
  }
  .mgleft {
    margin-left: 3px;
  }
  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
