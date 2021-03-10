import styled, { css } from "styled-components";

import { bounceDown } from "../../styles/animation";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin: 0 0 4% 0;
  padding: 0 15px;
  height: auto;
  transition: 0.5s;
  &::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      top: -0px;
      transform: scale(0.5);
      z-index: 2;
      ${bounceDown()}
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
