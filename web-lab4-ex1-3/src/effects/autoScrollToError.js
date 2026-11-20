
export function autoScrollToError(inputRef, error) {
  if (error && inputRef.current) {
    inputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}
