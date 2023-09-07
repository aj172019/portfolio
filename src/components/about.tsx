
import {notoSansKr400, notoSansKr700, roboto900} from "@/fonts/fonts";
import {aboutProps} from "@/components/page-props";
import ChapterTitle from "@/components/chapter-title";
import {BiSolidUser} from "react-icons/bi";

export default function About() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`px-10 py-7`}>
                <ChapterTitle title={`About`} icon={BiSolidUser} size={`3xl`}/>
            </div>
            <div className={`px-5`}>
                <div>
                {
                    aboutProps.map((item, index) => {
                        return (
                            <div className={`flex flex-col m-3 p-5 bg-dark-navy rounded-3xl opacity-80`} key={index}>
                                <div className={`flex flex-row items-center mb-1 ${notoSansKr700.className} text-xl text-platinum`}>
                                    <item.icon className={`mr-1`}/><span>{item.title}</span>
                                </div>
                                <div className={`max-w-5xl text-lg tracking-tighter ${notoSansKr400.className} text-custom-gray`}>
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