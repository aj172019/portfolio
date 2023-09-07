import './globals.css'
import type {Metadata} from 'next'
import {notoSansKr400, roboto300} from "@/fonts/fonts";
import IndexBar from "@/components/index-bar";
import ViewportProvider from "@/context/viev-port-provider";

export const metadata: Metadata = {
    title: 'Hello, World!',
    description: '포트폴리오입니다.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body className={`${notoSansKr400.className}`} style={{wordBreak:"keep-all"}}>
        <ViewportProvider>
        {children}
        </ViewportProvider>
        </body>
        </html>
    )
}
