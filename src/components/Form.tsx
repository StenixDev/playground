import { useRef, useState, type FormEvent } from "react";
import { Button } from "./ui/button";

type FormData = {
  name: string;
  email: string;
  password: string;
};

function Form() {
  const [submittedData, setSubmittedData] = useState<FormData>({});

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  }

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="text" placeholder="Enter your email" ref={email} />
        <input type="text" placeholder="Enter your password" ref={password} />
        <Button type="submit">Submit</Button>
      </form>

      <section>
        <hr />
        <p>name: {submittedData.name}</p>
        <p>email: {submittedData.email}</p>
        <p>password: {submittedData.password}</p>
      </section>
    </div>
  );
}
export default Form;
