import { Dispatch, SetStateAction } from "react"
import type { Post } from "~/posts"
// import { genres } from "~/posts"


export const ContentView = (props: {
        posts: Post[], 
        setPost: Dispatch<SetStateAction<Post | null>>
    }) => {
    
    
    return (
        <div className="flex-auto w-1/4 m-2 mr-1 rounded bg-slate-600">
            <div className="flex flex-col px-8">
                <div className="flex-initial h-16"></div>
                <div className="justify-start text-left">
                    <div>
                        <button className="flex-initial h-6 font-bold hover:text-white"> Philosophy </button>
                        <div className="flex flex-col">
                            <button className="text-left hover:text-white">• Kafka on the shore</button>
                            <button className="text-left hover:text-white">• 5 Dialogues</button>
                            <button className="text-left hover:text-white">• The Alchemist</button>
                        </div>
                    </div>
                    <div>
                        <button className="flex-initial h-6 font-bold hover:text-white" > Fantasy </button>
                        <div className="flex flex-col">
                            <button className="text-left hover:text-white">• The Final Empire</button>
                            <button className="text-left hover:text-white">• The Well of Ascension</button>
                            <button className="text-left hover:text-white">• The Hero of Ages</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}