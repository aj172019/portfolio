

import {indexProps} from "@/components/page-props";
import {Events, Link as ScrollLink} from "react-scroll";
import {useViewport} from "@/context/viev-port-provider";

export default function IndexBar() {
    const {activeSection} = useViewport();


    return (
        <div className="fixed flex flex-col items-center justify-center bottom-0 w-full">
            <div className="flex justify-around w-full bg-platinum bg-opacity-90 p-5 shadow-md">
                {indexProps.map((item, index) => (

                    <ScrollLink
                        key={index}
                        to={item.link} // 이것은 위에서 설정한 id와 일치해야 합니다. 예: "welcome", "about", "skills", 등
                        smooth={true}
                        duration={500}
                        className={`flex flex-col items-center text-center hover:text-coral
                          ${activeSection === item.link ? `text-coral` : `text-dark-navy`}
                        `}
                    >
                        <item.icon/>
                        {/*<div className="text-xs leading-0">{item.title}</div>*/}
                    </ScrollLink>
                ))}
            </div>
        </div>
    );
}
