import { Post } from "~/posts"
import { TitleText } from "./titleText"
import { BodyText } from "./bodyText"
import Image from "next/image"


export const PostView = (post : Post | undefined) => {
    if (!post) return <div>Post not found</div>
 
    const imageUrl = post.image ? post.image : "/Image not found"

    return (
        <div className="flex-auto w-3/4 p-4 m-2 ml-1 rounded bg-slate-300">
            <div className="flex flex-row mb-4 xl:px-16">
                <div className="flex flex-col mr-6">
                    <TitleText book={post.book}/>
                    <div>{post.author}</div>
                </div>
                <Image 
                    src={imageUrl} 
                    alt={imageUrl} 
                    width={240} 
                    height={64}
                />
            </div>
            <BodyText content={post.content}/>
        </div>
    )
}