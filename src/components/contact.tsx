'use client';
import {roboto900} from "@/fonts/fonts";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Contact() {

    return (
        <div className="section flex flex-col items-center justify-center h-screen">
            <div className={`w-full text-center px-10`}>
                <p className={`text-5xl font-bold mb-4 ${roboto900.className}`}>Contact.</p>
            </div>
            <div className="flex space-x-8">
                {[
                    {title: 'GitHub.', description: '@aj172019', link: 'https://github.com/aj172019/portfolio', icon: 'bi:github', sectionIndex: 3, status: 'done'},
                    {title: 'Blog.', description: '사용 가능 기술,\n학습 중인 기술', link: '/#skills', icon: 'mdi:blog-outline', sectionIndex: 4, status: 'working'},
                    {title: 'Instagram.', description: '@AHN_HUN', link: '/#experience', icon: 'bi:instagram', sectionIndex: 5, status: 'working'},
                    // {title: '컨텍트', description: 'GitHub,\nWebsite 등', link: '/#contact', icon: 'contact', sectionIndex: 6, status: 'done'},
                ].map((item, index) => {
                    return (
                        <Link key={index} href={item.link} target={`_blank`}>
                            <div className={`lg:p-12 w-56 flex flex-shrink-0 flex-col items-center text-center transform transition-transform duration-300 
                                ${item.status == 'done' ? `hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-md hover:text-blue-400 hover:cursor-pointer` : `opacity-50 cursor-default`}
                                `}>
                                <Icon className={`w-20 h-20`} icon={`${item.icon}`}/>
                                <p className={`block p-2.5 text-xl md:text-2xl lg:text-4xl ${roboto900.className}`}>
                                    {item.title}
                                </p>
                                <p className={`text-gray-400 text-md md:text-md lg:text-lg font-extralight whitespace-pre-line`}>
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