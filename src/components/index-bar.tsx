'use client'

import {usePathname} from "next/navigation";
import {indexProps} from "@/components/page-props";
import Link from "next/link";
import {Link as ScrollLink} from "react-scroll";

export default function IndexBar() {
    const pathname = usePathname();

    return (
        <div className="fixed flex flex-col items-center bottom-0 w-full">
            <div className="flex justify-around w-full bg-white bg-opacity-80 p-2 shadow-md">
                {indexProps.map((item, index) => (

                    <ScrollLink
                        key={index}
                        to={item.link} // 이것은 위에서 설정한 id와 일치해야 합니다. 예: "welcome", "about", "skills", 등
                        smooth={true}
                        duration={500}
                        className={`flex flex-col items-center text-center hover:text-gray-500 ${pathname === item.link ? `text-blue-500` : `text-gray-400`}`}
                    >
                        <item.icon></item.icon>
                        <div className="text-xs">{item.title}</div>
                    </ScrollLink>
                ))}
            </div>
        </div>
    );
}
