import styled, { keyframes } from "styled-components";

interface MenuButtonProps {
  isPannelOn: boolean;
}

const hide = keyframes`
  0% {
    right: calc(20% + 30px);
  }
  80% {
    right: 30px;
  }
  100% {
    right: 30px;
  }
`;

const show = keyframes`
  0% {
    right: 30px;
  }
  80% {
    right: calc(20% + 30px);
  }
  100% {
    right: calc(20% + 30px);
  }
`;

export const MenuButton = styled.div<MenuButtonProps>`
  position: fixed;
  top: 30px;
  /* right: ${(props) => (props.isPannelOn ? `calc(20% + 30px)` : "30px")}; */
  animation: ${(props) => (props.isPannelOn ? show : hide)} 1s normal forwards;
  z-index: 100;
`;

export const BurgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
