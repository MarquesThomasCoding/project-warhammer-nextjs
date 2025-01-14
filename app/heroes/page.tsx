import { Hero } from "@/lib/types";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetchHeros = async () => {
  const res = await fetch("http://localhost:1337/api/heroes/");
  const data = await res.json();
  return data.data;
};

export default async function HeroesPage() {
  const heroes = await fetchHeros();

  return (
    <div>
      <h1>Heroes</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {heroes &&
          heroes.map(
            (hero: Hero) =>
              hero.id && (
                <Link href={`/heroes/${hero.documentId}`} key={hero.id}>
                  <Card className="hover:shadow-lg h-full">
                    <CardHeader>
                      <CardTitle>{hero.name}</CardTitle>
                      <CardDescription>{hero.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
          )}
      </ul>
    </div>
  );
}