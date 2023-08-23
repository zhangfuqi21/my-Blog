import styled from "@emotion/styled";

export const LayoutWarpper = styled.div`
  width: 100%;
  margin-top: 70px;
  /* height: 1000px; */

  .ui {
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
  .container {
    z-index: 1;
    display: flex;
  }
  .w {
    width: 900px;
  }
  .exceptmgt :nth-child(N + 1) {
    margin-top: 50px;
  }
  .fixed {
    position: fixed;
    bottom: 30px;
    right: 50px;
    cursor: pointer;
    user-select: none;
    transition: 3s;
    .icon-huidaodingbu {
      font-size: 40px;
    }
  }
`;
