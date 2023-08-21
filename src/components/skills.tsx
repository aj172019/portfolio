import {gothic700, roboto900} from "@/fonts/fonts";
import {Icon} from "@iconify/react";
import {aboutProps, linksProps, skillsProps} from "@/components/page-props";
import Link from "next/link";

export default function Skills() {
    return (
        <div className="section flex flex-col items-center justify-center h-screen sm:px-36 md:px-48 lg:px-52">
            <div className={`flex flex-col items-center text-center px-10`}>
                <div className={`flex flex-row items-center text-5xl font-bold mb-4 ${roboto900.className}`}>
                    <Icon icon={'heroicons:code-bracket-solid'}/>
                    <span>Skills</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full">
                {skillsProps.map((item, index) => {
                    return (
                        <div key={index} className="w-1/2 md:w-1/2 lg:w-1/4 py-4">
                            <div className={`flex flex-shrink-0 flex-col items-center text-center text-black`}>
                                <Icon className={`w-20 h-20`} icon={item.icon}/>
                                <p className={` p-2.5 text-xl md:text-2xl lg:text-2xl ${roboto900.className} title`}>
                                    {item.title}
                                </p>
                                <ul className={`text-gray-400 text-sm md:text-md lg:text-lg font-extralight tracking-tighter whitespace-pre-line no-underline`}>
                                    {item.description}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}