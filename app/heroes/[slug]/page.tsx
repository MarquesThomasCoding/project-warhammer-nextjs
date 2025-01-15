import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const fetchHero = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/heroes/${slug}?populate=*`
  );
  const data = await res.json();
  return data.data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const hero = await fetchHero(slug);

  return (
    <Card className="m-20 flex gap-4 p-10">
      <Image
        src={`http://localhost:1337${hero?.picture?.url}`}
        alt={hero?.name}
        width={500}
        height={500}
      />
      <CardContent className="flex flex-col gap-4">
        <h1 className="text-4xl">{hero?.name}</h1>
        <p>{hero?.description}</p>
      </CardContent>
    </Card>
  );
}
