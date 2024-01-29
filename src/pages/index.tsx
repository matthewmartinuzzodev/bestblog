import Head from "next/head";
import { PageLayout } from "./components/layout";

export default function MainView() {

  return (
    <>
      <Head>
        <title>betterblog</title>
      </Head>
      <PageLayout>
        <div className="flex-auto w-1/4 m-2 mr-1 rounded bg-slate-600">div1</div>
        <div className="flex-auto w-3/4 m-2 ml-1 rounded bg-slate-300">div2</div>
      </PageLayout>
    </>
  );
}
