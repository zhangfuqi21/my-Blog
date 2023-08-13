import styled from "@emotion/styled";
export const HeaderWapper = styled.div`
  .black {
    background-color: #1b1c1d;
    transition-property: all;
    transition-duration: 0.5s;
  }
  .header {
    z-index: 999;
    transition-property: all;
    transition-duration: 0.5s;
    width: 100%;
    /* display: flex;
    justify-content: center; */
    position: fixed;
    top: 0;
    left: 0;

    .ui {
      width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    .item {
      height: 51px;

      padding: 13px 16px 13px 16px;
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      /* display: flex; */
    }
    .itemb {
      border-right: 1px solid #2d2e2f;
    }

    .container {
      display: flex;
    }
  }
`;
