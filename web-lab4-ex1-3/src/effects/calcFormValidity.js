
export function calcFormValidity(errors, setIsValid) {
  const valid = Object.values(errors).every(
    (error) => error === ""
  );

  setIsValid(valid);
}
