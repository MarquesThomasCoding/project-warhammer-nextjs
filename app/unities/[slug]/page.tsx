const fetchUnity = async ( slug : string ) => {
    const res = await fetch(`http://localhost:1337/api/unities/${slug}`);
    const data = await res.json();
    return data.data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const unity = await fetchUnity(slug);

  return (
    <div className="m-20 flex flex-col gap-4">
      <h1 className="text-4xl">{unity?.name}</h1>
      <p>{unity?.description}</p>
    </div>
  );
}