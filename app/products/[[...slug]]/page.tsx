interface Props {
  params: Promise<{ slug: string[] }>;
}

const Products = async ({ params }: Props) => {
  const { slug } = await params;
  return <div>Producats {slug}</div>;
};

export default Products;
