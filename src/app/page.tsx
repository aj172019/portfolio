import Welcome from "@/components/welcome";
import IndexBar from "@/components/index-bar";
import About from "@/components/about";
import Skills from "@/components/skills";
import Career from "@/components/career";

export default function Home() {
    return (
        <div>

            <div id={`welcome`} className={`pb-20`}>
                <Welcome/>
            </div>
            <div id={`about`} className={`pb-20`}>
                <About/>
            </div>
            <div id={`skills`} className={`pb-20`}>
            <Skills/>
            </div>
            <div id={`career`} className={`pb-20`}>
                <Career/>
            </div>
            <IndexBar/>
        </div>
    )
}
