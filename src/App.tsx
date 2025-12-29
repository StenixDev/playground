import { z } from "zod";

const userSchema = z.object({
  firstName: z.string(),
});

const user = {
  firstName: "stenix",
};

console.log(userSchema.parse(user));

function App() {
  return <div>App</div>;
}
export default App;
