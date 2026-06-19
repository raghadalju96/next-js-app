interface Props {
  params: Promise<{ id: string }>;
}

const UserDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  return <div>UserDetailsPage {id}</div>;
};

export default UserDetailsPage;
