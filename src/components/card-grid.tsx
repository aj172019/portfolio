import {indexProps, skillsProps} from "@/components/page-props";
import {Icon} from "@iconify/react";
import {roboto900} from "@/fonts/fonts";
import {useEffect, useRef} from "react";
import Link from "next/link";
import Card, {ResponsiveGridColumnCountProps} from "@/components/card";

export interface CardProps {
    title: string,
    description: string,
    icon: string,
}

export default function CardGrid({cardPropsList, responsiveGridColumnCountProps}: {
    cardPropsList: CardProps[],
    responsiveGridColumnCountProps: ResponsiveGridColumnCountProps
}) {

    return (
        <div className="flex flex-wrap justify-center sm:w-full lg:w-screen sm:px-36 md:px-48 lg:px-52">
            {cardPropsList.map((cardProps, index) => {
                return (
                    <Card key={`card_${cardProps.title}`} cardProps={cardProps} index={index}
                          responsiveGridColumnCount={responsiveGridColumnCountProps}/>
                )
            })}
        </div>
    )
}