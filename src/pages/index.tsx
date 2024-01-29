import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>betterblog</title>
      </Head>
      <main className="relative flex flex-row w-screen h-screen p-8 bg-slate-400">
        <div className="flex-auto w-1/2 m-2 rounded bg-slate-600"></div>
        <div className="flex-auto w-1/2 m-2 rounded bg-slate-300"></div>
      </main>
    </>
  );
}
