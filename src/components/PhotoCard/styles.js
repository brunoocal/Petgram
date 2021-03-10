import styled, { css } from "styled-components";
import { skeletonStyle } from "../../styles/skeleton/style";

import { fadeIn } from "../../styles/animation";

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
