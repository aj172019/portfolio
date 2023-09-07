import {
    notoSansKr400,
    notoSansKr900,
} from "@/fonts/fonts";
import {BiSolidArrowToBottom} from "react-icons/bi";
import {BsChevronDoubleDown} from "react-icons/bs";

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
            <div className={`absolute inset-x-0 text-center`} style={{bottom:'15%'}}>
                <p className={`text-platinum ${notoSansKr400.className} animate-blink`}>스크롤을 내려주세요</p>
            </div>
        </div>
    )
}