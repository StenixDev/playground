import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<string[]>(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function handleClick() {
    if (!input.trim()) return;

    setData((prev) => [...prev, input]);
    setInput("");
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="border"
        value={input}
      />
      <button onClick={handleClick}>Save</button>

      <hr />

      <h2>Saved Data</h2>

      {data.length === 0 ? (
        "No saved data"
      ) : (
        <div>
          {data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}
export default App;
