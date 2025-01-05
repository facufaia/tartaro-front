import { ChevronDown } from "lucide-react";

export default function AboutHero({ title, description }) {
  return (
    <section className="mx-auto flex flex-col justify-start min-h-[100svh] py-20 bg-gradient-to-b from-primary to-transparent relative px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content Side */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold animate-fade-in-down">{title}</h1>
          <p className="text-xl text-muted-foreground text-balance animate-fade-in-down">
            {description}
          </p>
        </div>

        {/* 3D Card Side */}
        <div className="flex justify-center animate-fade-in-right">
          <div className="group w-[400px] perspective-1000">
            <div className="relative rounded-xl border bg-card shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(15deg)] group-hover:shadow-primary group-hover:shadow-lg group-hover:border-primary">
              <div className="overflow-hidden h-[270px] md:h-[350px] rounded-xl">
                <img
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2024%2F05%2F15%2Fspanishbrands0-1.jpg"
                  alt="About Us hero image"
                  className="h-[350px] w-full object-cover   transition-transform duration-500 scale-125 group-hover:scale-100"
                />
                <div className="absolute inset-0 rounded-xl bg-black/20 opacity-75" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
