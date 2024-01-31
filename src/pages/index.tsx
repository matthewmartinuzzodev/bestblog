import Head from "next/head";

import { useState, useEffect } from "react";

import { PageLayout } from "../components/layout";
import { ContentView } from "~/components/contentView";
import { PostView } from "~/components/postView";
import { posts } from "~/posts";

import type { Post } from "~/posts";

export default function MainView() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(()=> {
    if(posts?.[0]){
      setPost(posts[0]);
    }
  }, [posts]);

  return (
    <div className="">
      <Head>
        <title>betterblog</title>
      </Head>
      <PageLayout>
        <ContentView posts={posts} setPost={setPost} />
        <PostView {...post}/>
      </PageLayout>
    </div>
  );
}
