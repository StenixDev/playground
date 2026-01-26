import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, setIsDark } = useTheme();
  return (
    <>
      <div
        className={isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
      >
        App
      </div>

      <button onClick={() => setIsDark((cv) => !cv)}>Click me</button>
    </>
  );
}
export default App;
