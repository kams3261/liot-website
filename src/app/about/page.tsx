import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
      <p>About</p>
    </div>
  );
}
