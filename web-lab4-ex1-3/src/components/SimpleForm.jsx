
import { useCallback, useEffect, useState } from "react";
import InputField from "./InputField";

import { validateField } from "../effects/validateField";
import { calcFormValidity } from "../effects/calcFormValidity";
import { syncErrorsToChild } from "../effects/syncErrorsToChild";

export default function SimpleForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "Name is required",
    email: "Email is required",
  });

  const [isValid, setIsValid] = useState(false);
  const [childErrors, setChildErrors] = useState(errors);

  const handleSync = useCallback((name, value) => {
    setValues((prev) => {
      if (prev[name] === value) return prev;

      return {
        ...prev,
        [name]: value,
      };
    });
  }, []);

  // useEffect #2: validateField()
  useEffect(() => {
    validateField(values, setErrors);
  }, [values]);

  // useEffect #3: calcFormValidity()
  useEffect(() => {
    calcFormValidity(errors, setIsValid);
  }, [errors]);

  // useEffect #4: syncErrorsToChild()
  useEffect(() => {
    syncErrorsToChild(errors, setChildErrors);
  }, [errors]);

  return (
    <main>
      <h1>Exercise 1.3 - Legacy Validation</h1>

      <SimpleFormDescription />

      <InputField
        name="name"
        label="Name"
        error={childErrors.name}
        onSync={handleSync}
      />

      <InputField
        name="email"
        label="Email"
        error={childErrors.email}
        onSync={handleSync}
      />

      <p>
        <strong>Form Status:</strong>{" "}
        {isValid ? "Valid" : "Invalid"}
      </p>
    </main>
  );
}

function SimpleFormDescription() {
  return (
    <p>
      Demonstrating a five-useEffect validation chain.
    </p>
  );
}
