import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const fetchUnity = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/unities/${slug}?populate=*`
  );
  const data = await res.json();
  return data.data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const unity = await fetchUnity(slug);

  return (
    <div className="m-20 p-10 flex gap-4">
      <Carousel className="w-full">
        <CarouselContent>
          {unity?.picture.map((picture: { url: string }, index: number) => (
            <CarouselItem key={index}>
              <Image
                src={`http://localhost:1337${picture.url}`}
                alt={unity?.name}
                width={500}
                height={500}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl">{unity?.name}</h1>
        <p>{unity?.description}</p>
      </div>
    </div>
  );
}
