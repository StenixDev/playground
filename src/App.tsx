import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userFormSchema = z.object({
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

type UserForm = z.infer<typeof userFormSchema>;

/*
const user: UserForm = {
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
}; */

function App() {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input type="text" id="firstName" name="firstName" />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" id="email" name="email" />
      </div>

      {/* Website */}
      <div>
        <label htmlFor="webUrl">Website</label>
        <br />
        <input type="url" id="webUrl" name="webUrl" />
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input type="number" id="age" name="age" />
      </div>

      {/* Training Days */}
      <div>
        <label htmlFor="trainingdays">Training Days</label>
        <br />
        <select id="trainingdays" name="trainingdays" multiple>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
        </select>
      </div>

      {/* Has Job */}
      <div>
        <label htmlFor="hasJob">Has Job</label>
        <br />
        <select id="hasJob" name="hasJob">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
export default App;
