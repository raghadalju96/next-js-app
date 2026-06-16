interface IUser {
  id: number;
  name: string;
}

const users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await res.json();

  return (
    <>
      {users?.map((user: IUser) => (
        <div key={user?.id}>{user?.name}</div>
      ))}
    </>
  );
};

export default users;
