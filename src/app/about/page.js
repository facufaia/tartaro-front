import ContactForm from "@/components/forms/ContactForm";
import AboutHero from "@/components/content/AboutHero";
import StoryValues from "@/components/content/StoryValues";
import { fetchCollection } from "@/lib/api";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function About() {
  const { data } = await fetchCollection("about");

  if (!data) {
    notFound();
  }

  const { hero_title, hero_description, contact_form_title } = data;

  const storyValuesData = {
    story: {
      title: data.story_title,
      description: data.story_description,
      description2: data.story_description_2,
      cards: {
        first: {
          title: data.story_first_card_title,
          description: data.story_first_card_description,
        },
        second: {
          title: data.story_second_card_title,
          description: data.story_second_card_description,
        },
      },
    },
    values: {
      title: data.values_title,
      rows: [
        {
          title: data.values_first_row_title,
          description: data.values_first_row_description,
        },
        {
          title: data.values_second_row_title,
          description: data.values_second_row_description,
        },
        {
          title: data.values_third_row_title,
          description: data.values_third_row_description,
        },
      ],
    },
  };

  return (
    <main className="min-h-[90svh]">
      {data && (
        <>
          <AboutHero title={hero_title} description={hero_description} />
          <div className="px-8 md:px-16">
            <StoryValues data={storyValuesData} />
            <section className="py-20">
              <div className="max-w-xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  {contact_form_title}
                </h2>
                <ContactForm />
              </div>
            </section>
          </div>
        </>
      )}
    </main>
  );
}
