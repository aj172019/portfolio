'use client';
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";
import MyLink from "@/components/my-link";
import ReactFullpage from '@fullpage/react-fullpage';
import Welcome from "@/components/welcome";
import IndexBar from "@/components/index-bar";
import {useState} from "react";

type Credits = {
    enabled?: boolean;
    label?: string;
    position?: "left" | "right";
};
export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const credits: Credits = {
        enabled: false,
        label: `<p class="text-gray-300">react-fullpage</p>`,
        position: "right",
    };
    const index = [`Title`, `Introduce`, `Skills`, `Career`, `Contact`];
    return (
        <>
        <ReactFullpage
            licenseKey={`OPEN-SOURCE-GPLV3-LICENSE`}
            navigation
            anchors={index.map((tooltipsText) => {
                return tooltipsText.toLowerCase();
            })}
            onLeave={(origin, destination, direction) => {
                setCurrentIndex(destination.index);
            }
            }
            dragAndMove={'vertical'}
            debug={false}
            credits={credits}
            navigationPosition={'right'}
            keyboardScrolling={true}
            slidesNavigation={true}
            scrollOverflow={true}
            scrollOverflowReset={true}
            render={(comp: any) => (
                <ReactFullpage.Wrapper>
                    <Welcome/>
                    <About/>
                    <Skills/>
                    <Career/>
                    <MyLink/>
                </ReactFullpage.Wrapper>
            )}
        />
            <IndexBar currentIndex={currentIndex}/>
        </>

    )
}
