import Link from "next/link";
import { sort } from "fast-sort";

interface IUser {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

export default async function UserTable({ sortOrder }: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const users: IUser[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>
            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedUsers?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
