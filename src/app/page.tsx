'use client'

import Welcome from "@/components/welcome";
import IndexBar from "@/components/index-bar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";
import {Element} from "react-scroll";
import {MutableRefObject, useEffect, useMemo, useRef, useState} from "react";
import {useViewport} from "@/context/viev-port-provider";



export default function Home() {
    const welcomeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const skillsRef = useRef<HTMLDivElement | null>(null);
    const careerRef = useRef<HTMLDivElement | null>(null);

    const isWelcomeInViewport = useIsInViewport(welcomeRef, 'welcome');
    console.log('isWelcomeInViewport: ', isWelcomeInViewport);

    const isAboutInViewport = useIsInViewport(aboutRef, 'about');
    console.log('isAboutInViewport: ', isAboutInViewport);

    const isSkillsInViewport = useIsInViewport(skillsRef, 'skills');
    console.log('isSkillsInViewport: ', isSkillsInViewport);

    const isCareerInViewport = useIsInViewport(careerRef, 'career');
    console.log('isCareerInViewport: ', isCareerInViewport);
    return (
        <div>
            <div ref={welcomeRef} id={`welcome`} className={`pb-20`}>
                <Welcome/>
            </div>
            <div ref={aboutRef} id={`about`} className={`pb-20`}>
                <About/>
            </div>
            <div ref={skillsRef} id={`skills`} className={`pb-20`}>
            <Skills/>
            </div>
            <div ref={careerRef} id={`career`} className={`pb-20`}>
                <Career/>
            </div>
            <IndexBar/>
        </div>
    )
}

function useIsInViewport(ref: React.RefObject<HTMLElement>, sectionName: string) {
    const { setActiveSection } = useViewport();
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        // 이제 IntersectionObserver는 클라이언트 사이드에서만 초기화됩니다.
        const observer = new IntersectionObserver(([entry]) => {
            const isNowIntersecting = entry.isIntersecting;
            setIsIntersecting(isNowIntersecting);
            if (isNowIntersecting) {
                setActiveSection(sectionName);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, sectionName, setActiveSection]);

    return isIntersecting;
}




