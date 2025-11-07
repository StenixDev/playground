import { useActionState } from "react";

async function increment(prevState, formData) {
  const name = formData.get("name");

  return name;
}

function Count() {
  const [state, formAction] = useActionState(increment, 0);

  console.log("rendered!");

  return (
    <form action="">
      <h1>{state}</h1>

      <input type="text" name="name" id="" />

      <button formAction={formAction}>submit</button>
    </form>
  );
}
export default Count;
