
import {notoSansKr400, notoSansKr700, roboto900} from "@/fonts/fonts";
import {aboutProps} from "@/components/page-props";
import ChapterTitle from "@/components/chapter-title";
import {BiSolidUser} from "react-icons/bi";
import Image from "next/image";

export default function About() {

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`px-10 py-7`}>
                <ChapterTitle title={`About`} icon={BiSolidUser} size={`3xl`}/>
            </div>
            <div className={`flex flex-row items-start justify-center mx-3`}>
                <Image src={`/profile.jpg`} alt={`profile-image`} width={`60`} height={`60`} className={`rounded-full m-0.5`}/>
                <div className={`m-0.5 p-3 bg-dark-navy text-lg tracking-tighter ${notoSansKr700.className} text-custom-gray`}>
                    <p>안녕하세요! 4년차 웹 개발자 안준헌입니다. 사용자 경험을 최우선으로 생각하며, 항상 최신 트렌드와 기술을 연구하며 성장하고 있습니다.</p>
                </div>
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