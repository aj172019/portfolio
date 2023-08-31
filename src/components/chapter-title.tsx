import {roboto900} from "@/fonts/fonts";
import {Icon} from "@iconify/react";

interface ChapterTitleProps {
    title: string,
    icon: string,
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl'
}

export default function ChapterTitle({title, icon, size = '5xl'}: ChapterTitleProps) {
    return (
        <div className={`flex flex-row items-center text-${size}`}>
            <Icon icon={icon}/>
            <span className={`${roboto900.className}`}>{title}</span>
        </div>
    )
}