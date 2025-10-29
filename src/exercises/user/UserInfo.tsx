import { type Info } from "./types";

type UserInfoProps = {
  user: Info;
};

function UserInfo({ user: { name, email } }: UserInfoProps) {
  return (
    <div>
      <h1 className="text-2xl">User</h1>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
export default UserInfo;
