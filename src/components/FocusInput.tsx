import { useRef } from "react";
import { Button } from "./ui/button";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input
        type="text"
        placeholder="click the  button to focus me"
        ref={inputRef}
      />

      <Button onClick={handleFocus}>Focus Input</Button>
    </div>
  );
}
export default FocusInput;
