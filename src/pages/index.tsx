import Head from "next/head";

import { useState } from "react";

import { PageLayout } from "../components/layout";
import { ContentView } from "~/components/contentView";
import { PostView } from "~/components/postView";
import { posts } from "~/posts";

export default function MainView() {

  const [post, setPost] = useState(posts[0]);
  
  if(!post) return <div>Post not found</div>;


  return (
    <div className="">
      <Head>
        <title>betterblog</title>
      </Head>
      <PageLayout>
        <ContentView />
        <PostView {...post}/>
      </PageLayout>
    </div>
  );
}
