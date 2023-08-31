import {gothic700, roboto900} from "@/fonts/fonts";
import {Icon} from "@iconify/react";
import {aboutProps, linksProps, skillsProps} from "@/components/page-props";
import Link from "next/link";
import ChapterTitle from "@/components/chapter-title";
import CardGrid from "@/components/card-grid";

export default function Skills() {
    const responsiveGridColumnCountProps = {
        sm: 2,
        md: 3,
        lg: 5,
    }
    return (
        <div className={`section flex flex-col justify-center h-screen`}>
            <div className={`flex flex-col items-center lg:pb-20`}>
                <ChapterTitle title={`Skills`} icon={`heroicons:code-bracket-solid`}/>
            </div>
            <CardGrid cardPropsList={skillsProps} responsiveGridColumnCountProps={responsiveGridColumnCountProps}/>
        </div>
    )
}