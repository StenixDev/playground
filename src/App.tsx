import Counter from "./components/Counter";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-amber-400">Playground!</h1>

      <Counter />

      <Button>Click x</Button>
    </div>
  );
}
export default App;
