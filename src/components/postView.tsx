import { Post } from "~/posts"
import { TitleText } from "./titleText"
import { BodyText } from "./bodyText"
export const PostView = (post : Post | null) => {
    if (!post) return <div>Post not found</div>
    return (
        <div className="flex-auto w-3/4 m-2 ml-1 rounded bg-slate-300 p-4">
            <TitleText book={post.book}/>
            <BodyText content={post.content}/>
        </div>
    )
}