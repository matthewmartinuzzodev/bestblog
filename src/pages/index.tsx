import Head from "next/head";

import { useState, useEffect } from "react";

import { PageLayout } from "../components/layout";
import { ContentView } from "~/components/contentView";
import { PostView } from "~/components/postView";
import { posts, postsMap } from "~/posts";

import type { Post } from "~/posts";

export default function MainView() {
  const [post, setPost] = useState<Post | undefined>(postsMap.get("Kafka on the Shore"));

  if (!post?.book) return <div></div>;


  return (
    <div className="">
      <Head>
        <title>betterblog</title>
      </Head>
      <PageLayout>
        <ContentView posts={postsMap} setPost={setPost} />
        <PostView {...post}/>
      </PageLayout>
    </div>
  );
}
