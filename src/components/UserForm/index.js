import React from "react";

import { Form, Input, Button } from "./styles";
import { useInputValue } from "../../Hooks/useInputValue";

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  return (
    <Form onSubmit={onSubmit} action="">
      <Input
        placeholder="email"
        type="email"
        value={email.value}
        onChange={email.onChange}
      />
      <Input
        placeholder="password"
        type="password"
        value={password.value}
        onChange={password.onChange}
      />
      <Button>Iniciar sesión</Button>
    </Form>
  );
};
