import {Icon} from "@iconify/react";
import {roboto900} from "@/fonts/fonts";
import {CardProps} from "@/components/card-grid";
import Link from "next/link";

export interface ResponsiveGridColumnCountProps {
    [key: string]: number | undefined;
    'xs'?: number;  // Extra small devices (e.g., phones)
    'sm'?: number;  // Small devices (e.g., tablets)
    'md'?: number;  // Medium devices (e.g., desktops)
    'lg'?: number;  // Large devices (e.g., larger desktops)
    'xl'?: number;  // Extra large devices
    '2xl'?: number; // Even larger devices (if applicable)
}

export default function Card({index, cardProps, responsiveGridColumnCount = {'sm': 2, 'md': 3, 'lg': 4, 'xl': 5, '2xl': 6}}: {
    index: number,
    cardProps: CardProps,
    responsiveGridColumnCount?: ResponsiveGridColumnCountProps
}) {

    return (
        <div key={index} className={`w-1/2 md:w-1/3 lg:w-1/5 py-4`}>
            <div className={`flex flex-col items-center `}>
                <cardProps.icon className={`w-20 h-20`}/>
                <div className={`py-2.5`}>
                    <span className={`text-2xl ${roboto900.className}`}>{cardProps.title}</span>
                </div>
                <div>
                    <span className={`text-gray-400 text-lg tracking-tight`}>{cardProps.description}</span>
                </div>
            </div>
        </div>
    )
}