'use client';
import {gothic700, roboto900} from '@/fonts/fonts';
import Index from "@/components/index";
import Introduce from "@/components/introduce";
import Skills from "@/components/skills";
import Career from "@/components/career";
import Contact from "@/components/contact";
import ReactFullpage from '@fullpage/react-fullpage';
type Credits = {
    enabled?: boolean;
    label?: string;
    position?: "left" | "right";
};
export default function Home() {

    const credits: Credits = {
        enabled: false,
        label: `<p class="text-gray-300">react-fullpage</p>`,
        position: "right",
    };
    const index = [`Title`, `Index`, `Introduce`, `Skills`, `Career`, `Contact`];
    const tooltip : string[] = index.map((tooltipsText) => {

        let tooltipWrapper = document.createElement('p');
        tooltipWrapper.className = `text-gray-500 text-xs font-extralight`;
        tooltipWrapper.innerHTML = tooltipsText;
        return tooltipWrapper.outerHTML;
    });
    return (
        <ReactFullpage
            licenseKey={`OPEN-SOURCE-GPLV3-LICENSE`}
            navigation
            anchors={index.map((tooltipsText) => {
                return tooltipsText.toLowerCase();
            })}
            // animateAnchor={true}
            dragAndMove={'vertical'}
            debug={false}
            credits={credits}
            showActiveTooltip={true}
            navigationPosition={'right'}
            // navigationTooltips={tooltip}
            scrollOverflow={false}
            render={(comp: any) => (
                <ReactFullpage.Wrapper>
                    <div id={`title`} className="section flex items-center h-screen">
                        <div className={`w-full py-40`}>
                            <p className={`p-3 text-2xl md:text-4xl lg:text-6xl tracking-tight ${roboto900.className}`}>
                                제목입니다.
                                {/*안녕하세요.*/}
                            </p>
                            <p className={`p-3 text-2xl md:text-4xl lg:text-6xl tracking-tight ${roboto900.className}`}>
                                알맞은 제목을 써주세요.
                                {/*개발자 안준헌 입니다.*/}
                            </p>
                            <p className={`p-3 text-gray-400 text-sm md:text-lg lg:text-2xl font-extralight tracking-tighter`}>
                                부제목입니다. 알맞은 부제목을 써주세요.
                                {/*Java & Spring 전문가로서, Next.js의 새로운 세계 탐험 중*/}
                            </p>
                        </div>
                    </div>
                    <Index/>
                    <Introduce/>
                    <Skills/>
                    <Career/>
                    <Contact/>
                </ReactFullpage.Wrapper>
            )}
        />
    )
}
