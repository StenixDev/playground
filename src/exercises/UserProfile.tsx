import { useState } from "react";

function UserProfile() {
  interface UserTypes {
    name: string;
    age: number;
    email: string;
  }

  const [user, setUser] = useState<UserTypes>({
    name: "",
    age: 0,
    email: "",
  });

  return (
    <div>
      <h1>User Profile</h1>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>Email: {user.email}</p>

      <hr />

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="enter name"
          onChange={(e) => setUser((cv) => ({ ...cv, name: e.target.value }))}
        />
        <input
          type="number"
          placeholder="enter age"
          onChange={(e) =>
            setUser((cv) => ({ ...cv, age: Number(e.target.value) }))
          }
        />
        <input
          type="email"
          placeholder="enter your email address"
          onChange={(e) => setUser((cv) => ({ ...cv, email: e.target.value }))}
        />
      </div>
    </div>
  );
}
export default UserProfile;
