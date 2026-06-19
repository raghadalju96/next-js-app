interface IUser {
  id: number;
  name: string;
}

type UserTableProps = {};

export default async function UserTable() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await res.json();
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
