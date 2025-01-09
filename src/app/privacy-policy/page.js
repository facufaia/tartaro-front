import { fetchCollection } from "@/lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function PrivacyPolicy() {
  const { data } = await fetchCollection("privacy-policy");

  if (!data) {
    notFound();
  }

  const { title, paragraph } = data;

  return (
    <main className="container mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
        <BlocksRenderer content={paragraph} />
      </div>
    </main>
  );
}
