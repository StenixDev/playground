// type UserTypes = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };

interface UserTypes {
  name: string;
  age: number;
  isStudent: boolean;
}

function User({ name, age, isStudent }: UserTypes) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
    </div>
  );
}
export default User;
