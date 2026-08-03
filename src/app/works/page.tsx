import type { Metadata } from "next";

import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
        <p>Works</p>
      </div>
      <CtaSection />
    </>
  );
}