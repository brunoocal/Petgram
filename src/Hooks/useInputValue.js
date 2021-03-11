import { useState } from "react";

export const useInputValue = (initialValue, verificationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [verificated, setVerificated] = useState({});
  const onChange = (e) => {
    setValue(e.target.value);
    setVerificated(verificationFunction(e));
  };

  return { value, onChange, verificated };
};
