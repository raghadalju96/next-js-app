import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const UserDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  if (Number(id) > 10) {
    notFound();
  }

  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
