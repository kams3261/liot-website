import type { Metadata } from "next";

import { CtaSection } from "@/components/CtaSection";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Test",
};

type TestTableRow = {
  id: number;
  created_at: string;
  name: string;
};

export default async function TestPage() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from("Test_Table")
    .select("id, created_at, name")
    .order("id", { ascending: true });

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-6 py-10 sm:py-16">
        <h1 className="text-2xl font-bold">Test_Table</h1>

        {error ? (
          <p className="text-red-600">エラー: {error.message}</p>
        ) : data && data.length > 0 ? (
          <ul className="space-y-2 text-left">
            {(data as TestTableRow[]).map((row) => (
              <li key={row.id} className="rounded border px-4 py-2">
                <span className="font-medium">{row.name}</span>
                <span className="ml-2 text-sm text-gray-500">
                  (id: {row.id}, {new Date(row.created_at).toLocaleString("ja-JP")})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>データがありません。</p>
        )}
      </div>
      <CtaSection />
    </>
  );
}
