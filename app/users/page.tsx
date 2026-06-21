import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { sortOrder } = await searchParams;
  return (
    <main className="p-6">
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn">
        New user
      </Link>
      <UserTable sortOrder={sortOrder} />
    </main>
  );
}
