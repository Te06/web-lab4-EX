
import { useEffect, useRef, useState } from "react";
import { syncToParent } from "../effects/syncToParent";
import { autoScrollToError } from "../effects/autoScrollToError";

export default function InputField({
  name,
  label,
  error,
  onSync,
}) {
  const [localValue, setLocalValue] = useState("");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef(null);

  // useEffect #1: syncToParent()
  useEffect(() => {
    if (!touched) return;

    syncToParent(name, localValue, onSync);
  }, [name, localValue, onSync, touched]);

  // useEffect #5: autoScrollToError()
  useEffect(() => {
    if (touched) {
      autoScrollToError(inputRef, error);
    }
  }, [error, touched]);

  function handleChange(event) {
    setLocalValue(event.target.value);
    setTouched(true);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <input
        ref={inputRef}
        id={name}
        name={name}
        value={localValue}
        onChange={handleChange}
      />

      {touched && error && (
        <p style={{ color: "red" }}>{error}</p>
      )}
    </div>
  );
}
