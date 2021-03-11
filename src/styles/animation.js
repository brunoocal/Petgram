import { css, keyframes } from "styled-components";

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0)
    opacity: 1;
  }
`;

const fadeInSimpleKeyframes = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const flipYKeyFrames = keyframes`
  from {
    transform: rotateY(90deg);
    clip-path: circle(0% at 0% 0%);
  }

  to {
    transform: rotateY(0deg);
    clip-path: circle(150% at 0% 0%);
  }
`;

const fadeInRightClipPath = keyframes`
  from {
      clip-path: circle(0% at 0% 50%);
  }

  to {
    clip-path: circle(200% at 0% 50%);
  }
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

export const fadeInSimple = ({ time = "1s", type = "ease" } = {}) => css`
  animation: ${time} ${fadeInSimpleKeyframes} ${type};
`;

export const flipX = ({
  time = "1.3s",
  type = "ease",
  delay = "1s",
} = {}) => css`
  animation: ${time} ${fadeInRightClipPath} ${type};
  animation-delay: ${delay};
`;

export const flipYAndClipCircle = ({
  time = "1.3s",
  type = "ease",
} = {}) => css`
  animation: ${time} ${flipYKeyFrames} ${type};
`;

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  25% {
    top: 0px;
  }

  40%{
    top: 10px
  }

  65%{
    top: -3px
  }

  100%{
    top: 0px
  }

`;

export const bounceDown = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `;
