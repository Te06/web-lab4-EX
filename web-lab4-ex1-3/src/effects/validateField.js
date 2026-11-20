
export function validateField(values, setErrors) {
  const errors = {
    name: values.name.trim() ? "" : "Name is required",
    email: values.email.trim() ? "" : "Email is required",
  };

  setErrors((prev) => {
    if (
      prev.name === errors.name &&
      prev.email === errors.email
    ) {
      return prev;
    }

    return errors;
  });
}
