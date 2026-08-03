import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
        <p>Test Website Hello World.<br />
          ローカルで確認：http://localhost:3000/<br />
          本番ページのURL：https://liot-website.vercel.app/<br />
          Vercelの管理画面：https://vercel.com/syuheik1118-gmailcoms-projects/liot-website</p>
      </div>

      <div className="mx-auto w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
        <p>2つ目のセクション（returnの直下にdivを２つ並べることはできない。Fragmentの追加が必要）</p>
        <p>※Fragment・・・＜＞〜＜＞で挟む。</p>
      </div>
    </>
  );
}
