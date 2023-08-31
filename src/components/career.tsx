
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Icon} from "@iconify/react";
import {roboto900} from "@/fonts/fonts";
import ChapterTitle from "@/components/chapter-title";

export default function Career() {
    return (
        <div className="section">
            <div className={`flex flex-col items-center px-10 py-7`}>
                <ChapterTitle title={`Career`} icon={`heroicons:briefcase-solid`} size={`3xl`}/>
            </div>
            <VerticalTimeline animate={false} lineColor={`whitesmoke`}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'white', color: 'black', boxShadow: '0 0 0 0px black'}}
                    contentArrowStyle={{borderRight: '0px solid white'}}
                    date="2022.11 - present"
                    iconStyle={{background: 'white', color: 'black', boxShadow: 'none'}}
                    icon={<Icon icon={'mdi:company'}/>}
                >
                    <h3 className={`${roboto900.className}`}>Creative Director</h3>
                    <h4>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'white', color: 'black', boxShadow: '0 0 0 0px black'}}
                    contentArrowStyle={{borderRight: '7px solid white'}}
                    date="2022.11 - present"
                    iconStyle={{background: 'white', color: 'black', boxShadow: 'none'}}
                    icon={<Icon icon={'mdi:company'}/>}
                >
                    <h3 className={`${roboto900.className}`}>Creative Director</h3>
                    <h4>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'white', color: 'black', boxShadow: '0 0 0 0px black'}}
                    contentArrowStyle={{borderRight: '7px solid white'}}
                    date="2022.11 - present"
                    iconStyle={{background: 'white', color: 'black', boxShadow: 'none'}}
                    icon={<Icon icon={'mdi:company'}/>}
                >
                    <h3 className={`${roboto900.className}`}>Creative Director</h3>
                    <h4 className={``}>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: 'white', color: 'black', boxShadow: '0 0 0 0px black'}}
                    contentArrowStyle={{borderRight: '7px solid white'}}
                    date="2022.11 - present"
                    iconStyle={{background: 'white', color: 'black', boxShadow: 'none'}}
                    icon={<Icon icon={'mdi:company'}/>}
                >
                    <h3 className={`${roboto900.className}`}>Creative Director</h3>
                    <h4 className={``}>Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}