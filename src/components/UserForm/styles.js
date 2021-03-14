import styled, { css } from "styled-components";

import { fadeInSimple } from "../../styles/animation";

export const Container = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  flex-direction: column;
  position: relative;
`;

export const IconContainer = styled.div`
  height: 22.5%;
  position: absolute;
  top: -0%;
`;

export const Form = styled.form`
  margin-top: 10%;
  width: 90%;
  padding: 16px 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  font-family: "Open Sans", sans-serif;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #d001a2;
  font-weight: 800;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 3px solid #ccc;
  border-radius: 3px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 90%;
  padding: 2% 5%;
  margin: 5% 0;
  box-sizing: border-box;
  font-size: 18px;
  transition: 0.5s;

  &:focus {
    outline: none;
    background: rgba(0, 0, 255, 0.04);
  }

  ${(props) =>
    props.verification
      ? css`
          border-bottom: 6px solid rgba(0, 255, 0);
        `
      : css`
          border-bottom: 6px solid rgba(255, 0, 0);
        `}

  ${(props) =>
    props.value === "" &&
    css`
      border-bottom: 3px solid #ccc;
    `}
`;

export const InputErrorLabel = styled.p`
  ${fadeInSimple("0.3s")}
  position: absolute;
  color: black;
  right: 12%;
  top: 34%;

  ${(props) =>
    props.password &&
    css`
      top: 47%;
    `}
`;

export const Button = styled.button`
  background: rgb(181, 0, 181);
  background: linear-gradient(
    90deg,
    rgba(181, 0, 181, 1) 0%,
    rgba(255, 140, 0, 1) 100%
  );
  border-radius: 20px;
  color: #fff;
  height: 32px;
  display: flex;
  margin: 5% 0;
  padding: 6%;
  width: 35%;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const Span = styled.span`
  color: rgb(181, 0, 181);
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;
