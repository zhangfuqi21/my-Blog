import styled from "@emotion/styled";
const ItemWarpper = styled.div<{ list?: string }>`
  position: relative;
  width: 207px;
  height: 98px;
  z-index: 1;
  .mask {
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
    /*background:hsla(0,100%,80%,0.5)*/

    opacity: 0.3;
  }
  .item {
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.list});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
export default ItemWarpper;
