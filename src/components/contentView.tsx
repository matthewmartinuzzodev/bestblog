import { Dispatch, SetStateAction } from "react"
import type { Post } from "~/posts"


export const ContentView = (props: {
        posts: Post[], 
        setPost: Dispatch<SetStateAction<Post | null>>
    }) => {
    return (
        <div className="flex-auto w-1/4 m-2 mr-1 rounded bg-slate-600">
            div1
        </div>
    )
}