import styled, { css } from "styled-components";
import { skeletonStyle } from "../../styles/skeleton/style";

import { fadeIn, flipYAndClipCircle, flipX } from "../../styles/animation";

export const Article = styled.article`
  position: relative;
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin: 8% 0;
`;

export const Image = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  ${flipYAndClipCircle()}
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -5%;
  left: 1.5%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: linear-gradient(170deg, #833ab4 11.2%, #c13584 91.1%);
  z-index: 2;
  & svg {
    color: white;
  }
`;

export const LikeContainer = styled.div`
  ${flipX({ delay: "0.45s" })}
  animation-fill-mode: forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 22.5px;
  border-radius: 10px;
  position: absolute;
  bottom: -3%;
  left: 9%;
  background: white;
  z-index: 1;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 20%);
  clip-path: circle(0% at 0% 50%);
`;

export const Likes = styled.div`
  font-size: 16px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-left: 12.5%;
`;

export const ContainerPhotoCardSkeleton = styled.div`
  position: relative;
  min-height: 200px;
`;

export const PhotoCardImageSkeleton = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin: 8% 0;
  ${(props) => css`
    ${skeletonStyle(props.light)}
  `}
`;
