'use client';
import {useEffect, useRef} from "react";
import {gothic700, roboto900} from "@/fonts/fonts";
import {CodeBracketIcon, EnvelopeIcon, LinkIcon, NewspaperIcon, UserIcon} from "@heroicons/react/24/solid";

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

    const icons: { [key: string]: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>> } = {
        introduce: UserIcon,
        skills: CodeBracketIcon,
        career: NewspaperIcon,
        link: LinkIcon
    }

    return (
        <div className="section flex flex-col items-center justify-center h-screen px-52">
            <div className={`w-full text-center px-10`}>
                <p className={`text-2xl md:text-3xl lg:text-5xl font-bold mb-4 ${roboto900.className}`}>Index.</p>
            </div>
            <div className="flex flex-wrap justify-center w-full">
                {[
                    {title: 'Introduce.', description: '나의 소개', link: '/#introduce', icon: 'introduce', sectionIndex: 3, status: 'working'},
                    {title: 'Skills', description: '나의 기술', link: '/#skills', icon: 'skills', sectionIndex: 4, status: 'working'},
                    {title: 'Career.', description: '나의 경력', link: '/#career', icon: 'career', sectionIndex: 5, status: 'working'},
                    {title: 'Link.', description: '관련 링크', link: 'link', icon: 'link', sectionIndex: 6, status: 'done'},
                ].map((item, index) => {
                    const Icon = icons[item.icon];
                    return (
                        <div key={index} onClick={() => {
                            if (item.status === 'done')
                                handleLinkClick(item.sectionIndex)
                        }} className="w-1/2 md:w-1/2 lg:w-1/4 py-4">
                            <div className={`flex flex-shrink-0 flex-col items-center text-center transform transition-transform duration-300 text-blue-400
                        ${item.status == 'done' ? `hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-md hover:text-blue-600 hover:cursor-pointer` : `opacity-50 cursor-default`}
                        `}>
                                <Icon className={`w-20 h-20`}/>
                                <p className={`block p-2.5 text-xl md:text-2xl lg:text-4xl ${roboto900.className}`}>
                                    {item.title}
                                </p>
                                <p className={`text-gray-400 text-sm md:text-md lg:text-lg font-extralight tracking-tighter whitespace-pre-line`}>
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