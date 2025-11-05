import { useForm } from "react-hook-form";

interface Formdata {
  name: string;
  email: string;
  password: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Formdata>();

  function onSubmit(data: Formdata) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-xs flex-col gap-1"
    >
      <div className="flex gap-1.5">
        <input
          type="text"
          id="name"
          placeholder="name"
          className="border border-neutral-300"
          {...register("name", { required: "Name  is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="flex gap-1.5">
        <input
          type="text"
          id="email"
          placeholder="email"
          className="border border-neutral-300"
          {...register("email", {
            required: "email  is required",

            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Invalid email  address",
            },
          })}
        />

        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <input
          placeholder="Enter  password"
          className="border border-neutral-300"
          type="password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="self-start border p-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </form>
  );
}
export default Form;
