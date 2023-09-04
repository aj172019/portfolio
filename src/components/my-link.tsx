import {roboto900} from "@/fonts/fonts";
import Link from "next/link";
import { Icon } from '@iconify/react';
import {linksProps} from "@/components/page-props";
import ChapterTitle from "@/components/chapter-title";

export default function MyLink() {
    return (
        <div className={`flex flex-col justify-center h-screen ${linksProps.length > 2 && 'items-center'}`}>
            <div className={`flex flex-col items-center lg:pb-20`}>
                {/*<ChapterTitle title={`Links`} icon={`heroicons:link-solid`}/>*/}
            </div>
            <div className="flex flex-wrap justify-center sm:w-full lg:w-screen sm:px-36 md:px-48 lg:px-52">
                {linksProps.map((item, index) => {
                    return (
                        <Link href={item.link} key={index} className="w-1/2 md:w-1/2 lg:w-1/4 py-4" target={'_blank'}>
                            <div className={`flex flex-shrink-0 flex-col items-center text-center text-black
                        ${item.status == 'done' ? `hover:text-gray-500 hover:cursor-pointer hoverContainer` : `opacity-50 cursor-default`}
                        `}>
                                <Icon className={`w-20 h-20`} icon={item.icon}/>
                                <p className={`p-2.5 text-2xl ${roboto900.className} title`}>
                                    <span className={'flex flex-row items-center bg-gray-300 rounded-xl px-1'}><Icon icon={'heroicons:link-solid'} className={'w-5 h-5'}/>{item.title}</span>
                                </p>
                                <p className={`text-gray-400 text-lg font-extralight tracking-tighter whitespace-pre-line no-underline`}>
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}