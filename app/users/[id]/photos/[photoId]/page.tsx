interface Props {
  params: Promise<{ id: string; photoId: string }>;
}

const UserPhotoDetails = async ({ params }: Props) => {
  const { id, photoId } = await params;

  return (
    <div>
      UserPhotoDetails {id} {photoId}
    </div>
  );
};

export default UserPhotoDetails;
