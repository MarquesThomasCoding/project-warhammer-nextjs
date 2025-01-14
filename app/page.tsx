import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default async function Home() {
  const fetchArmy = async () => {
    const res = await fetch(`http://localhost:1337/api/army/`);
    const data = await res.json();
    return data.data;
  };

  const army = await fetchArmy();

  return (
    <div className="h-full">
      <header className="w-full h-[80vh] relative">
        <Image
          src="/img/aeldari.webp"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-full object-cover z-[-1]"
        />
        <section className="absolute top-0 left-0 w-full h-full p-10 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end gap-10">
          <h1 className="text-5xl text-white font-bold">{army?.title}</h1>
          <div className="text-muted text-lg">
            {army?.description.map(
              (
                desc: { children: { text: string; bold: boolean }[] },
                index: number
              ) => (
                <p key={index} className="text-muted text-lg">
                  {desc.children.map(
                    (
                      child: { text: string; bold: boolean },
                      childIndex: number
                    ) => (
                      <span
                        key={childIndex}
                        className={child.bold ? "font-bold" : ""}
                      >
                        {child.text}
                      </span>
                    )
                  )}
                </p>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/heroes"
              className={buttonVariants({ variant: "outline" })}
            >
              See heroes
            </Link>
            <Link
              href="/unities"
              className={buttonVariants({ variant: "default" })}
            >
              See unities
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}
