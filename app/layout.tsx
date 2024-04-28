// "use client";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
// import { useMode } from "@/hooks/useMode";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CryptoTracker",
    description: "Generated by create next app",
    icons: {
        icon: "/logo.svg"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const { mode } = useMode();

    return (
        <html lang="en">
            <body className={cn(
                spaceGrotesk.className,
                // mode === "dark" && "dark"
            )}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}