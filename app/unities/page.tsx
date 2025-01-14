import { Unity } from "@/lib/types";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page() {
  const fetchUnities = async () => {
    const res = await fetch("http://localhost:1337/api/unities/");
    const data = await res.json();
    return data.data;
  };

  const unities = await fetchUnities();

  return (
    <div>
      <h1>Unities</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        {unities &&
          unities.map(
            (unity: Unity) =>
              unity.id && (
                <Link href={`/unities/${unity.documentId}`} key={unity.id}>
                  <Card className="hover:shadow-lg h-full">
                    <CardHeader>
                      <CardTitle>{unity.name}</CardTitle>
                      <CardDescription>{unity.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )
          )}
      </ul>
    </div>
  );
}