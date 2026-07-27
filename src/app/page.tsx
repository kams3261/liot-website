export default async function Home() {
  // ローカルで確認用 — loading UI 確認後に削除
  // await new Promise((r) => setTimeout(r, 5000));

  return (
    <>
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
        <p>Test Website Hello World.<br />
          ローカルで確認：http://localhost:3000/<br />
          本番ページのURL：https://liot-website.vercel.app/<br />
          Vercelの管理画面：https://vercel.com/syuheik1118-gmailcoms-projects/liot-website</p>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center py-10 text-center sm:py-16">
      <p>2つ目のセクション（returnの直下にdivを２つ並べることはできない。Fragmentの追加が必要）</p>
      </div>
    </>
  );
}
