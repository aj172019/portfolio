'use client'

import Welcome from "@/components/welcome";
import IndexBar from "@/components/index-bar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";
import {MutableRefObject, useEffect, useMemo, useRef, useState} from "react";
import {useViewport} from "@/context/viev-port-provider";
import Projects from "@/components/projects";
import Comments from "@/components/comments";



export default function Home() {
    const welcomeRef = useRef<HTMLDivElement | null>(null);
    const isWelcomeInViewport = useIsInViewport(welcomeRef, 'welcome');

    const aboutRef = useRef<HTMLDivElement | null>(null);
    const isAboutInViewport = useIsInViewport(aboutRef, 'about');

    const commentsRef = useRef<HTMLDivElement | null>(null);
    const isCommentsInViewport = useIsInViewport(commentsRef, 'comments');

    const skillsRef = useRef<HTMLDivElement | null>(null);
    const isSkillsInViewport = useIsInViewport(skillsRef, 'skills');

    const careerRef = useRef<HTMLDivElement | null>(null);
    const isCareerInViewport = useIsInViewport(careerRef, 'career');

    const projectsRef = useRef<HTMLDivElement | null>(null);
    const isProjectsInViewport = useIsInViewport(projectsRef, 'projects');

    return (
        <div className={`bg-pattern`}>
            <div ref={welcomeRef} id={`welcome`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <Welcome/>
            </div>
            <div ref={aboutRef} id={`about`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <About/>
            </div>
            <div ref={commentsRef} id={`comments`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <Comments/>
            </div>
            <div ref={skillsRef} id={`skills`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <Skills/>
            </div>
            <div ref={careerRef} id={`career`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <Career/>
            </div>
            <div ref={projectsRef} id={`projects`} className={`flex flex-col justify-center pb-14 min-h-screen`}>
                <Projects/>
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
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
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




