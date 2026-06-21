import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { sortOrder } = await searchParams;
  return (
    <main className="p-6">
      <UserTable sortOrder={sortOrder} />
    </main>
  );
}
