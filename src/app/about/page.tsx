
import {roboto900} from "@/fonts/fonts";
import {aboutProps} from "@/components/page-props";
import ChapterTitle from "@/components/chapter-title";
import {BiSolidUser} from "react-icons/bi";

export default function About() {

    return (
        <div className="flex flex-col h-screen items-center justify-start">
            <div className={`flex flex-row items-center justify-center px-10 py-7`}>
                <ChapterTitle title={`About`} icon={BiSolidUser} size={`3xl`}/>
            </div>
            <div className={`w-screen px-5`}>
                <div>
                {
                    aboutProps.map((item, index) => {
                        return (
                            <div className={`flex flex-col my-3 ml-3 mr-7`} key={index}>
                                <div className={`flex flex-row items-center px-3 py-1 ${roboto900.className} text-md`}>
                                    <span>{item.title}</span><item.icon/>
                                </div>
                                <div className={`px-3 py-1 max-w-5xl text-sm tracking-tighter`}>
                                    {item.description}
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}