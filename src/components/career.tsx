import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";
import Image from "next/image";
import {roboto300, roboto900} from "@/fonts/fonts";

export default function Career() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            const el = document.querySelector('.vertical-timeline-element--work'); // 원하는 요소 선택
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= 0) { // 원하는 위치에 따라 조건을 변경할 수 있습니다.
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener('scroll', checkScroll);

        return () => window.removeEventListener('scroll', checkScroll);
    }, []);
    return (
        <div className="section">
            <div className={`flex flex-col items-center text-center px-10 py-7`}>
                <div className={`flex flex-row text-3xl font-bold ${roboto900.className}`}>
                    <Icon icon={'heroicons:newspaper-solid'}/>
                    <span>Career</span>
                </div>
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