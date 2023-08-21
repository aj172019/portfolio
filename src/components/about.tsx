import {roboto900} from "@/fonts/fonts";
import {aboutProps} from "@/components/page-props";
import {Icon} from "@iconify/react";

export default function About() {

    return (
        <div className="section flex flex-col h-screen items-baseline justify-start">
            <div className={`px-5`}>
                <div
                    className={`flex flex-row items-center justify-center md:justify-normal lg:justify-normal w-full h-auto p-2 md:p-5 lg:p-5 border-b-2 border-gray-200 text-3xl md:text-5xl lg:text-5xl font-bold ${roboto900.className}`}>
                    <Icon icon={'heroicons:user-solid'}/>
                    <span>About</span>
                </div>
                {
                    aboutProps.map((item, index) => {
                        return (
                            <div className={`flex flex-col my-3 ml-3 mr-7`} key={index}>
                                <div className={`flex flex-row items-center px-3 py-1 ${roboto900.className} text-md`}>
                                    <span>{item.title}</span><Icon icon={item.icon}/>
                                </div>
                                <div className={`px-3 py-1 max-w-3xl text-sm tracking-tighter`}>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}