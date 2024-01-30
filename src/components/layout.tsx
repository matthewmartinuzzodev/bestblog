import type { PropsWithChildren } from "react"
import { Header } from "./header"
import { Footer } from "./footer"

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <div className="px-64 bg-slate-500">
        <Header/>
        <main className="relative flex flex-row h-screen font-mono bg-slate-400">
            {props.children}
        </main>
        <Footer/>
    </div>
  )
}