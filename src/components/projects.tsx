import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Icon} from "@iconify/react";
import {roboto900} from "@/fonts/fonts";
import ChapterTitle from "@/components/chapter-title";
import {BiSolidBriefcase, BiSolidBuildings} from "react-icons/bi";

export default function Projects() {
    return (
        <div>
            <div className={`flex flex-col items-center px-10 py-7`}>
                <ChapterTitle title={`Projects`} icon={BiSolidBriefcase} size={`3xl`}/>
            </div>

            <div className={`flex flex-col items-center`}>
                <div className="relative w-3/5">
                    {/* 타임라인 선 */}
                    <div className="absolute top-0 left-3 h-full w-0.5 bg-gray-300"></div>

                    {Array(4).fill(0).map((_, idx) => (
                        <div key={idx} className="timeline-item flex items-center my-6">
                            {/* 아이콘 */}
                            <div className="flex items-center justify-center w-8 h-8 z-10">
                                <BiSolidBuildings className={`w-8 h-8`}/>
                            </div>
                            {/* 내용 */}
                            <div className="ml-6 bg-white p-4 w-full">
                                <h3 className="font-bold">Creative Director</h3>
                                <h4 className="mt-2">Miami, FL</h4>
                                <p className="mt-4">
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}