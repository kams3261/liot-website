import { getCategories } from "@/lib/microcms";

function categoryLabel(
  category: Awaited<ReturnType<typeof getCategories>>["contents"][number],
): string {
  if (typeof category.name === "string" && category.name.length > 0) {
    return category.name;
  }
  return category.id;
}

export default async function Home() {
  let categories: Awaited<ReturnType<typeof getCategories>>["contents"] = [];
  let fetchError: string | null = null;

  try {
    const data = await getCategories();
    categories = data.contents;
  } catch (error) {
    fetchError =
      error instanceof Error ? error.message : "カテゴリの取得に失敗しました";
  }

  return (
    <main className="mx-auto flex min-h-full max-w-2xl flex-1 flex-col gap-8 px-6 py-16">
      <h1 className="text-3xl font-semibold">Hello World.</h1>

      <section>
        <h2 className="mb-4 text-xl font-medium">カテゴリ（microCMS）</h2>
        {fetchError ? (
          <p className="text-sm text-red-600">{fetchError}</p>
        ) : categories.length === 0 ? (
          <p className="text-sm text-zinc-600">カテゴリがありません。</p>
        ) : (
          <ul className="list-inside list-disc space-y-1">
            {categories.map((category) => (
              <li key={category.id}>{categoryLabel(category)}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
