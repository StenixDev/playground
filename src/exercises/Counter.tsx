import { Button } from "@/components/ui/button";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-3xl">{counter}</h1>

      <Button
        className="mr-0.5 cursor-pointer rounded-none"
        onClick={() => setCounter((c) => c + 1)}
      >
        Increment
      </Button>
      <Button
        className="cursor-pointer rounded-none"
        onClick={() => setCounter((c) => c - 1)}
      >
        Decrement
      </Button>
    </div>
  );
}
export default Counter;
