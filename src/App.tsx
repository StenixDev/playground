import { z } from "zod";

const userSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
  webUrl: z.string().url(),
  age: z.number().int().positive(),
  trainingdays: z.array(z.string()),
  hasJob: z.boolean(),
  skills: z.object({
    web: z.array(z.string()),
    framework: z.array(z.string()),
  }),
});

type User = z.infer<typeof userSchema>;

const user: User = {
  firstName: "stenix",
  email: "stenix@gmail.com",
  webUrl: "http://www.sdev.com",
  age: 34,
  trainingdays: ["monday", "tuesday", "wednesday"],
  hasJob: true,
  skills: {
    web: ["html", "css", "javascript"],
    framework: ["nextjs"],
  },
};

console.log(userSchema.safeParse(user));

function App() {
  return <div>App</div>;
}
export default App;
