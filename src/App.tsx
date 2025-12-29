import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="dark">
      <h1>Hello App</h1>

      <button onClick={() => setDarkMode((cv) => !cv)}>
        Dark Mode {darkMode ? "🌒" : "☀️"}
      </button>
    </div>
  );
}
export default App;
