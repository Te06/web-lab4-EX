
export function syncErrorsToChild(errors, setChildErrors) {
  setChildErrors((prev) => {
    if (
      prev.name === errors.name &&
      prev.email === errors.email
    ) {
      return prev;
    }

    return { ...errors };
  });
}
