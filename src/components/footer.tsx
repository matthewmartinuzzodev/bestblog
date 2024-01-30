import Link from "next/link"
import { Icon } from '@iconify-icon/react';

export const Footer = () => {
    return (
        <div className="flex items-center justify-end h-24 bg-slate-100">
            <div>
            </div>
            <div>
                <Link href="https://github.com/matthewmartinuzzodev/bestblog" className="hover:text-gray-600 m-8">
                    <Icon icon="ri:github-line" width="90" height="90" />
                </Link>
            </div>
        </div>
    )
}