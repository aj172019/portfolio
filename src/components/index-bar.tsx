

import {indexProps} from "@/components/page-props";
import {Events, Link as ScrollLink} from "react-scroll";
import {useViewport} from "@/context/viev-port-provider";

export default function IndexBar() {
    const {activeSection} = useViewport();


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
