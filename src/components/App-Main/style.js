const { default: styled } = require("@emotion/styled");

export const MainWarpper = styled.div`
  .bg {
    background-image: url(https://cdn.naccl.top/blog/img/bg1.jpg);
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -999;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-position: center 0;
  }
`;
