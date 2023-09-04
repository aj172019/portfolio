'use client'
import {skillsProps} from "@/components/page-props";
import ChapterTitle from "@/components/chapter-title";
import CardGrid from "@/components/card-grid";
import {HiCodeBracket} from "react-icons/hi2";

export default function Skills() {
    const responsiveGridColumnCountProps = {
        sm: 2,
        md: 3,
        lg: 5,
    }
    return (
        <div className={`flex flex-col justify-center h-screen`}>
            <div className={`flex flex-col items-center pb-10 lg:pb-20`}>
                <ChapterTitle title={`Skills`} icon={HiCodeBracket}/>
            </div>
            <CardGrid cardPropsList={skillsProps} responsiveGridColumnCountProps={responsiveGridColumnCountProps}/>
        </div>
    )
}