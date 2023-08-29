'use client';
import {useEffect, useRef} from "react";
import {roboto900} from "@/fonts/fonts";
import { Icon } from '@iconify/react';
import {indexProps, linksProps} from "@/components/page-props";

export default function Indexes() {
    const fullpageApiRef = useRef<any>(null);

    const handleLinkClick = (sectionIndex: number) => {
        if (fullpageApiRef.current) {
            fullpageApiRef.current.moveTo(sectionIndex);
        }
    };

    useEffect(() => {
        fullpageApiRef.current = (window as any).fullpage_api;
    }, []);


    return (
        <div className={`section flex flex-col ${linksProps.length > 2 && 'items-center'} justify-center h-screen`}>
            <div className={`flex flex-col items-center text-center px-10`}>
                <div className={`flex flex-row text-5xl font-bold mb-4 ${roboto900.className}`}>
                    <Icon icon={'heroicons:list-bullet-solid'}/>
                    <span>Index</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center sm:w-full lg:w-screen sm:px-36 md:px-48 lg:px-52">
                {indexProps.map((item, index) => {
                    return (
                        <div key={index} onClick={() => {
                            if (item.status === 'done')
                                handleLinkClick(item.sectionIndex)
                        }} className="w-1/2 md:w-1/2 lg:w-1/4 py-4">
                            <div className={`flex flex-shrink-0 flex-col items-center text-center text-black 
                        ${item.status == 'done' ? `hover:text-gray-500 hover:cursor-pointer hoverContainer` : `opacity-50 cursor-default`}
                        `}>
                                <Icon className={`w-20 h-20`} icon={item.icon}/>
                                <p className={`p-2.5 text-2xl ${roboto900.className} title`}>
                                    <span className={`flex flex-row items-center bg-gray-300 rounded-xl px-1`}><Icon icon={`heroicons:chevron-down`} className={`w-5 h-5`}/>{item.title}</span>
                                </p>
                                <p className={`text-gray-400 text-lg font-extralight tracking-tighter whitespace-pre-line no-underline`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

