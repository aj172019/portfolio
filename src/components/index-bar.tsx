'use client'

import {indexProps} from "@/components/page-props";
import {Events, Link as ScrollLink} from "react-scroll";
import {useEffect, useState} from "react";

export default function IndexBar() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        // 스크롤 이벤트 리스너를 추가
        Events.scrollEvent.register('begin', function (to: string) {
            setActiveSection(to);
        });

        return () => {
            // 컴포넌트가 unmount될 때 리스너를 제거
            Events.scrollEvent.remove('begin');
        };
    }, []);


    return (
        <div className="fixed flex flex-col items-center bottom-0 w-full">
            <div className="flex justify-around w-full bg-white bg-opacity-80 p-2 shadow-md">
                {indexProps.map((item, index) => (

                    <ScrollLink
                        key={index}
                        to={item.link} // 이것은 위에서 설정한 id와 일치해야 합니다. 예: "welcome", "about", "skills", 등
                        smooth={true}
                        duration={500}
                        className={`flex flex-col items-center text-center hover:text-gray-500 
                        ${activeSection === item.link ? `text-blue-500` : `text-gray-400`}
                        `}
                    >
                        <item.icon/>
                        <div className="text-xs">{item.title}</div>
                    </ScrollLink>
                ))}
            </div>
        </div>
    );
}
