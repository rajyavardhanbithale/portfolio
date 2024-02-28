'use client'
import { DM_Mono } from "next/font/google";
import { useState } from "react";
const mono = DM_Mono({ subsets: ["latin"], weight: ["300"] })

export default function TitleBar(props) {
    const title = props.title
    const [open, setOpen] = useState(props.isOpen)
    
    
    return (
        <>
            <div className="flex title rounded-t-lg">
                <div className="z-10   px-5 py-2 flex justify-start gap-2">
                    <div onClick={props.handleClose} className="w-4 h-4 bg-red-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="text-center align-middle w-[65%] my-auto">
                    <span className={`text-gray-100 font-semibold text-base ${mono.className}`}>{title}</span>
                </div>
            </div>

        </>
    )
}