import {
    notoSansKr400,
    notoSansKr900,
} from "@/fonts/fonts";

export default function Welcome() {
    return (
        <div className="flex flex-col items-center"> {/* 배경색 추가 */}
            <div className={`w-full py-7 text-center bg-opacity-70 bg-dark-navy`}>
                <h1 className={`text-3xl leading-tight tracking-tight mb-4 ${notoSansKr900.className} text-platinum`}>
                    안준헌의 개발자 포트폴리오
                </h1>
                <h2 className={`text-xl text-gray-500 font-light tracking-tight ${notoSansKr400.className} text-custom-gray`}>
                    Java, Spring 개발자
                </h2>
            </div>
        </div>
    )
}