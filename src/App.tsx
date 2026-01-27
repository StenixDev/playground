type Data = {
  user: {
    firstname: string;
    age: number;
    isActive: boolean;
  };
};

type Role = {
  quantity: Data["user"]["age"];
};

function App({ user }: Data) {
  const admin: Role = { quantity: 12 };
  return (
    <div>
      <h1>TS Object Types</h1>
      firstname: {user.firstname}
      role: {admin.quantity}
    </div>
  );
}
export default App;
