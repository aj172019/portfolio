'use client';
import {gothic700, roboto900} from '@/fonts/fonts';
import Index from "@/components/index";
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";
import MyLink from "@/components/my-link";
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
    return (
        <ReactFullpage
            licenseKey={`OPEN-SOURCE-GPLV3-LICENSE`}
            navigation
            anchors={index.map((tooltipsText) => {
                return tooltipsText.toLowerCase();
            })}
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
                    <div className="section flex items-center h-screen">
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
                    <About/>
                    <Skills/>
                    <Career/>
                    <MyLink/>
                </ReactFullpage.Wrapper>
            )}
        />
    )
}
