import type { FC } from "react";

type UserTypes = {
  name: string;
  age: number;
  isStudent: boolean;
};

//import type { ReactNode } from "react";

/*
interface UserTypes {
  children: ReactNode;
}

function User({ children }: UserTypes) {
  return <div>{children}</div>;
}*/

const User: FC<UserTypes> = ({ name, age, isStudent }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
};

export default User;
