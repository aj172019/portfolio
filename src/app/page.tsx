'use client';
import {gothic700, roboto900} from '@/fonts/fonts';
import Indexes from "@/app/indexes/page";
import Introduce from "@/app/introduce/page";
import Skills from "@/app/skills/page";
import Experience from "@/app/experience/page";
import Contact from "@/app/contact/page";
import ReactFullpage from '@fullpage/react-fullpage';
type Credits = {
    enabled?: boolean;
    label?: string;
    position?: "left" | "right";
};
export default function Home() {

    const credits: Credits = {
        enabled: true,
        label: "please scroll",
        position: "left",
    };
    return (
        <ReactFullpage
            licenseKey={`OPEN-SOURCE-GPLV3-LICENSE`}
            navigation
            // onLeave={onLeave}
            // sectionsColor={sectionsColor}
            // pluginWrapper={pluginWrapper}
            debug={false}
            credits={credits}
            showActiveTooltip={true}
            navigationTooltips={['title', 'indexes', 'introduce', 'skills', 'experience', 'contact']}
            // anchors={['title', 'indexes', 'introduce', 'skills', 'experience', 'contact']}
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
                    <Indexes/>
                    <Introduce/>
                    <Skills/>
                    <Experience/>
                    <Contact/>
                </ReactFullpage.Wrapper>
            )}
        />
    )
}
