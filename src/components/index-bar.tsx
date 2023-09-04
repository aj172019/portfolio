'use client'

import {usePathname} from "next/navigation";
import {indexProps} from "@/components/page-props";
import Link from "next/link";

export default function IndexBar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center bottom-0 w-full">
            <div className="flex justify-around w-full bg-white bg-opacity-80 p-2 shadow-md">
                {indexProps.map((item, index) => (

                    <Link
                        key={index}
                        href={item.link}
                        className={`flex flex-col items-center text-center hover:text-gray-500 ${pathname === item.link ? `text-blue-500` : `text-gray-400`}`}
                    >
                        <item.icon></item.icon>
                        <div className="text-xs">{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
