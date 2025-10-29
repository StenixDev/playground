import { type AdminInfoList } from "./types";

type AdminInfoListProps = {
  admin: AdminInfoList;
};

function AdminInfo({
  admin: { name, email, role, lastLogin },
}: AdminInfoListProps) {
  return (
    <div>
      <h1 className="text-2xl">Admin </h1>

      <h3>{name}</h3>
      <p>{email}</p>
      <p>{lastLogin.toLocaleString()}</p>
      <p>{role}</p>
    </div>
  );
}
export default AdminInfo;
