// import Image from "next/image";

const fetchHero = async ( slug : string ) => {
    const res = await fetch(`http://localhost:1337/api/heroes/${slug}`);
    // const resImage = await fetch(`http://localhost:1337/api/upload/files`);
    const data = await res.json();
    // const dataImage = await resImage.json();
    // console.log(dataImage);
    // const image = dataImage.find((image: { documentId: string }) => image.documentId === data.data.documentId);
    // data.data.image = image;
    return data.data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const hero = await fetchHero(slug);

  return (
    <div className="m-20 flex flex-col gap-4">
        {/* <Image src={`http://localhost:1337/${hero?.image?.url}`} alt={hero?.name} width={500} height={500} /> */}
      <h1 className="text-4xl">{hero?.name}</h1>
      <p>{hero?.description}</p>
    </div>
  );
}