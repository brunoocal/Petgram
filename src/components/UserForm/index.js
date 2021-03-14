import React, { useEffect, useState } from "react";

import {
  Container,
  IconContainer,
  Form,
  Title,
  Input,
  InputErrorLabel,
  Button,
  Span,
  Text,
} from "./styles";
import { GiDogHouse } from "react-icons/gi";
import { useInputValue } from "../../Hooks/useInputValue";

export const UserForm = ({ onSubmit, forLogin }) => {
  const email = useInputValue("", (e) => handleEmailChange(e));
  const password = useInputValue("", (e) => handlePasswordChange(e));

  const handleEmailChange = (e) => {
    if (e.target.value.includes("@")) {
      if (e.target.value.length <= 6) {
        return {
          validated: false,
          message: "6 characters min.",
        };
      }
      return {
        validated: true,
        message: "",
      };
    } else {
      return {
        validated: false,
        message: "@ missing",
      };
    }
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length > 8) {
      return {
        validated: true,
        message: "",
      };
    } else {
      return {
        validated: false,
        message: "8 characters min.",
      };
    }
  };

  return (
    <>
      <Container>
        <IconContainer>
          <GiDogHouse size="100%" color="#d001a2" />
        </IconContainer>
        <Form onSubmit={onSubmit} action="">
          {forLogin ? <Title>Log in</Title> : <Title>Sign up</Title>}
          <Input
            placeholder="Email"
            type="text"
            value={email.value}
            onChange={(e) => email.onChange(e)}
            verification={email.verificated.validated}
          />

          {email.value !== "" && !email.verificated.validated && (
            <InputErrorLabel>{email.verificated.message}</InputErrorLabel>
          )}

          <Input
            placeholder="Password"
            type="password"
            value={password.value}
            onChange={(e) => password.onChange(e)}
            verification={password.verificated.validated}
          />

          {password.value !== "" && !password.verificated.validated && (
            <InputErrorLabel password>
              {password.verificated.message}
            </InputErrorLabel>
          )}

          {console.log(password, email)}
          {forLogin && <p>Forgot your password?</p>}
          <Button>{forLogin ? "Log in" : "Sign up"}</Button>
          {forLogin ? (
            <Text>
              You are not registered? <Span>Sign up</Span>
            </Text>
          ) : (
            <Text>
              Already have an account? <Span>Log in</Span>
            </Text>
          )}
        </Form>
      </Container>
    </>
  );
};
