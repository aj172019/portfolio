import {indexProps, skillsProps} from "@/components/page-props";
import {Icon} from "@iconify/react";
import {roboto900} from "@/fonts/fonts";
import {useEffect, useRef} from "react";
import Link from "next/link";
import Card, {ResponsiveGridColumnCountProps} from "@/components/card";
import {IconType} from "react-icons/lib";

export interface CardProps {
    title: string,
    description: string,
    icon: IconType,
}

export default function CardGrid({cardPropsList, responsiveGridColumnCountProps}: {
    cardPropsList: CardProps[],
    responsiveGridColumnCountProps: ResponsiveGridColumnCountProps
}) {
    return (
        <div className="flex flex-wrap justify-center w-full lg:w-screen px-10 md:px-48 lg:px-52">
            {cardPropsList.map((cardProps, index) => {
                return (
                    <Card key={`card_${cardProps.title}`} cardProps={cardProps} index={index}
                          responsiveGridColumnCount={responsiveGridColumnCountProps}/>
                )
            })}
        </div>
    )
}