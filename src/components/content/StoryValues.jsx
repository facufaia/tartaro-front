import { Shield, Leaf, Heart, Award, Users } from "lucide-react";

export default async function StoryValues({ data }) {
  const { story, values } = data;

  return (
    <section className="py-20 min-h-[100svh] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story Side */}
          <div className="text-foreground flex flex-col justify-between h-full">
            <div className="text-center">
              <h2 className="text-3xl md:text-start font-bold mb-8">
                {story.title}
              </h2>

              <p className="mb-4 text-center md:text-start text-pretty">
                {story.description}
              </p>
              <p className="mb-8 text-center md:text-start text-pretty">
                {story.description2}
              </p>
            </div>
            {/* Icon Row with Descriptions */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full border-2 border-primary group-hover:bg-primary/5 transition-colors">
                    <Award className="w-10 h-10 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    {story.cards.first.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center md:text-start text-balance">
                  {story.cards.first.description}
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-full border-2 border-primary group-hover:bg-primary/5 transition-colors">
                    <Users className="w-10 h-10 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium">
                    {story.cards.second.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center md:text-start text-balance">
                  {story.cards.second.description}
                </p>
              </div>
            </div>
          </div>

          {/* Values Side */}
          <div className="text-center md:text-start flex flex-col justify-center md:justify-start gap-12">
            <h2 className="text-3xl font-bold mb-8">{values.title}</h2>
            <div className="grid gap-8">
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-14 h-14 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {values.rows[0].title}
                  </h3>
                  <p className="text-muted-foreground text-balance">
                    {values.rows[0].description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Leaf className="w-14 h-14 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {values.rows[1].title}
                  </h3>
                  <p className="text-muted-foreground text-balance">
                    {values.rows[1].description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center md:items-start">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart className="w-14 h-14 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {values.rows[2].title}
                  </h3>
                  <p className="text-muted-foreground text-balance">
                    {values.rows[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
