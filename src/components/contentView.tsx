import { Dispatch, SetStateAction } from "react"
import { postsMap, type Post } from "~/posts"
// import { genres } from "~/posts"

const ContentButton = (props: {
        post: Post | undefined,
        setPost: Dispatch<SetStateAction<Post | undefined>>
    }) => {

    if (!props.post) return <div>missing book</div>;
    const bookName = props.post.book ? props.post.book : "book not found";
    return (
        <button 
            className="text-left hover:text-white" 
            onClick={(e) => props.setPost(postsMap.get(bookName))}>• {bookName}
        </button>
    )
}

export const ContentView = (props: {
        posts : Map<string, Post>, 
        setPost: Dispatch<SetStateAction<Post | undefined>>
    }) => {
    
    return (
        <div className="flex-auto w-1/4 m-2 mr-1 rounded bg-slate-600">
            <div className="flex flex-col px-8">
                <div className="flex-initial h-16"></div>
                <div className="justify-start text-left">
                    <div>
                        <button className="flex-initial h-6 font-bold hover:text-white"> Philosophy </button>
                        <div className="flex flex-col">
                            <ContentButton post={props.posts.get("Kafka on the Shore")} setPost={props.setPost}/>
                            <ContentButton post={props.posts.get("5 Dialogues")} setPost={props.setPost}/>
                            <ContentButton post={props.posts.get("The Alchemist")} setPost={props.setPost}/>
                        </div>
                    </div>
                    <div>
                        <button className="flex-initial h-6 font-bold hover:text-white" > Fantasy </button>
                        <div className="flex flex-col">
                            <ContentButton post={props.posts.get("The Final Empire")} setPost={props.setPost}/>
                            <ContentButton post={props.posts.get("The Well of Ascension")} setPost={props.setPost}/>
                            <ContentButton post={props.posts.get("The Hero Of Ages")} setPost={props.setPost}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}