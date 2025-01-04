import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fetchSingle } from "@/lib/api";

export default async function HomeHero() {
  const { data } = await fetchSingle("home");
  const { hero_title, hero_description, hero_btn } = data;

  return (
    <section className="relative min-h-svh flex flex-col md:flex-row">
      {/* Left Image */}
      <div
        className="flex-1 bg-cover bg-center min-h-[50svh] md:min-h-svh relative"
        style={{
          backgroundImage:
            "url('https://media.voguebusiness.com/photos/6266c358dec19cbf7b6e29a4/2:3/w_2560%2Cc_limit/unknown-voguebus-unknown-apr-22-story.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r to-background/70 from-primary/50" />
      </div>

      {/* Right Image */}
      <div
        className="flex-1 bg-cover bg-center min-h-[50svh] md:min-h-svh relative"
        style={{
          backgroundImage:
            "url('https://pauseonline.s3.amazonaws.com/wp-content/uploads/2017/03/image5JPG.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l to-background/70 from-primary/50" />
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-right">
            {hero_title}
          </h1>
          <p className="text-xl mb-8 animate-fade-in-right">
            {hero_description}
          </p>
          <Button size="lg" asChild className="animate-fade-in-right">
            <Link href="/products">{hero_btn}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}