export default async function Home() {
  // TODO: 確認用 — loading UI 確認後に削除
  await new Promise((r) => setTimeout(r, 5000));

  return (
    <div className="mx-auto flex w-full flex-1 items-center justify-center px-4 py-10 text-center sm:px-6 sm:py-16">
      <p>Test Website Hello World.<br />
        ローカルで確認：http://localhost:3000/<br />
        本番ページのURL：https://liot-website.vercel.app/<br />
        Vercelの管理画面：https://vercel.com/syuheik1118-gmailcoms-projects/liot-website</p>
    </div>
  );
}
