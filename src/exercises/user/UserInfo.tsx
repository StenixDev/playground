import { type Info } from "./types";

type AdminInfo = Info & { role?: string };

function UserInfo({ name, age, role }: AdminInfo) {
  return (
    <div>
      <h1 className="text-2xl">{role ? role : "User"}</h1>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
}
export default UserInfo;
