import type { Metadata } from "next";

import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Test",
};

export default function TestPage() {
  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
        <p>Test</p>
      </div>
      <CtaSection />
    </>
  );
}
