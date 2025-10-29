import AdminInfo from "./exercises/user/AdminInfo";
import UserInfo from "./exercises/user/UserInfo";

function App() {
  const user = {
    id: 1,
    name: "stenix",
    email: "connect@stenix.dev",
  };

  const admin = {
    id: 2,
    name: "xCode",
    email: "admin@admin.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin} />
    </div>
  );
}
export default App;
