import {gothic700} from "@/fonts/fonts";

export default function Introduce() {
    return (
        <div id="introduce" className="section flex items-center justify-center h-screen">
            <p className={`block p-2.5 text-2xl md:text-4xl lg:text-6xl tracking-tight ${gothic700.className}`}>
                introduce.
            </p>
        </div>
    )
}