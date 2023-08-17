'use client';
import {useEffect, useRef} from "react";
import {gothic700, roboto900} from "@/fonts/fonts";
import {CodeBracketIcon, EnvelopeIcon, NewspaperIcon, UserIcon} from "@heroicons/react/24/solid";

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
        experience: NewspaperIcon,
        contact: EnvelopeIcon
    }

    return (
        <div id="indexes" className="section flex flex-col items-center justify-center h-screen">
            <div className={`w-full text-center px-10`}>
                <p className={`text-5xl font-bold mb-4 ${roboto900.className}`}>Index.</p>
            </div>
            <div className="flex space-x-8">
                {[
                    {title: 'Introduce.', description: '프로필,\n간략한 소개', link: '/#introduce', icon: 'introduce', sectionIndex: 3, status: 'working'},
                    {title: 'Skills', description: '사용 가능 기술,\n학습 중인 기술', link: '/#skills', icon: 'skills', sectionIndex: 4, status: 'working'},
                    {title: 'Experience.', description: '경험한 회사,\n프로젝트', link: '/#experience', icon: 'experience', sectionIndex: 5, status: 'working'},
                    {title: 'Contact.', description: 'GitHub,\nWebsite 등', link: '/#contact', icon: 'contact', sectionIndex: 6, status: 'done'},
                ].map((item, index) => {
                    const Icon = icons[item.icon];
                    return (
                        <div key={index} onClick={() => {
                            if (item.status === 'done')
                            handleLinkClick(item.sectionIndex)
                        }}>
                            <div className={`lg:p-12 w-56 flex flex-shrink-0 flex-col items-center text-center transform transition-transform duration-300 
                                ${item.status == 'done' ? `hover:-translate-y-1 hover:-translate-x-1 hover:drop-shadow-md hover:text-blue-400 hover:cursor-pointer` : `opacity-50 cursor-default`}
                                `}>
                                <Icon className={`w-20 h-20`}/>
                                <p className={`block p-2.5 text-xl md:text-2xl lg:text-4xl ${roboto900.className}`}>
                                    {item.title}
                                </p>
                                <p className={`text-gray-400 text-md md:text-md lg:text-lg font-extralight tracking-tighter whitespace-pre-line`}>
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