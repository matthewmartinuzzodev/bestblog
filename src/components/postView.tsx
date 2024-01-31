import { Post } from "~/posts"
import { TitleText } from "./titleText"
export const PostView = (post : Post | null) => {
    if (!post) return <div>Post not found</div>
    
    return (
        <div className="flex-auto w-3/4 m-2 ml-1 rounded bg-slate-300 p-4">
            <TitleText book={post.book}/>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-8 xl:px-16 dark:text-gray-400">
                {`${post.content}`}
            </p>
        </div>
    )
}