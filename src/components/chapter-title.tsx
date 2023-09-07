import {gowunDodum, notoSansKr900, roboto900} from "@/fonts/fonts";
import {IconType} from "react-icons/lib";

interface ChapterTitleProps {
    title: string,
    icon: IconType,
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
}

export default function ChapterTitle({title, icon: IconComponent, size = '5xl'}: ChapterTitleProps) {
    return (
        <div className={`flex flex-row items-center text-${size} text-platinum`}>
            <IconComponent className={`mr-3`}/>
            <span className={`${notoSansKr900.className} `}>{title}</span>
        </div>
    )
}