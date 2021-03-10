import styled, { css, keyframes } from "styled-components";
import { skeletonStyle } from "../../styles/skeleton/style";
import { Link as LinkRouter} from "@reach/router";

const fadeInKeyframes = keyframes`
  from {
    filter: opacity(0%) blur(5px) grayscale(100%);
  }

  to {
    filter: opacity(100%) blur(0px) grayscale(0%);
  }
`;

export const ContainerCategorySkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`;

export const CategoryImage = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;

export const CategoryTitle = styled.div`
  width: 26px;
  height: 15px;
  margin-top: 8px;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;

  ${(props) =>
    props.src !== "https://i.imgur.com/FHETadE.png" &&
    css`
      animation: 1s ${fadeInKeyframes} ease;
    `}
`;
