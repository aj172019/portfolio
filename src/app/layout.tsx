import './globals.css'
import type {Metadata} from 'next'
import {roboto300} from "@/fonts/fonts";
import IndexBar from "@/components/index-bar";

export const metadata: Metadata = {
    title: 'Hello, World!',
    description: '포트폴리오입니다.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body className={`${roboto300.className}`}>
        {children}
        </body>
        </html>
    )
}
