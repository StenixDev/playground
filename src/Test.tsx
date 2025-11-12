import { useState } from "react";

type Input = {
  sessionId: number;
  user: string;
};

function Test() {
  console.log("rendered Test");
  const [input, setInput] = useState<string>("");
  const [other, setOther] = useState<Input | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setOther({
      sessionId: Math.random(),
      user: input,
    });
  }
  return (
    <div>
      <h1>Hello {other?.user ? other.user : "Guest"}</h1>
      <input type="text" name="" id="" value={input} onChange={handleChange} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
export default Test;
