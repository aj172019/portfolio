import {useEffect, useRef} from "react";
import {Icon} from "@iconify/react";
import {indexProps} from "@/components/page-props";

export default function IndexBar({currentIndex}: { currentIndex: number }) {
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
        <div className="fixed flex flex-col items-center bottom-0 md:bottom-5 lg:bottom-5 w-full">
            <div className="flex justify-around w-full md:w-64 lg:w-64 md:rounded-full lg:rounded-full bg-white md:bg-opacity-80 lg:bg-opacity-80 p-2 shadow-md">
                {indexProps.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleLinkClick(item.sectionIndex)}
                        className={`flex flex-col items-center text-center hover:text-gray-500 ${currentIndex === index ? 'text-blue-500' : ''}`}
                    >
                        <Icon className="w-6 h-6" icon={item.icon}/>
                        <div className="text-xs">{item.title}</div>
                    </button>
                ))}
            </div>
        </div>
    );
}
