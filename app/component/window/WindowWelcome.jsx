'use client'

import { DM_Mono } from "next/font/google";
import Draggable from "react-draggable";
import './window.css'
const mono = DM_Mono({ subsets: ["latin"], weight: ["300"] });

export default function Window() {
    const config = {
        "title": "Welcome"
    }

    return (
        <>
            <Draggable defaultPosition={{ x: 200, y: 300 }}>

                <div className="w-[50%] shadow-xl">
                    {/* Title bar */}
                    <div>
                        <div className="title rounded-t-lg px-5 py-2 flex justify-start gap-2">
                            <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        </div>
                        <div className="absolute flex w-full top-1 left-2 justify-center">
                            <span className={`text-gray-100 font-semibold text-base ${mono.className}`}>{config.title}</span>
                        </div>
                    </div>

                    {/* Window Body */}
                    <div className="py-5 card bg-[#212024] rounded-b-lg">
                        <div className="flex flex-col w-full justify-center align-middle text-center capitalize">
                            <span className="text-white text-base">Hello  </span>
                            <span className="text-white text-xl my-2">i'm  Rajyavardhan Bithale</span>
                            <img src="https://avatars.githubusercontent.com/u/70558897?v=4" className="w-[40%] mx-auto rounded-2xl" alt="my image" />
                            <span className="text-white my-4">Proficient Python Developer and Full Stack Web Developer experienced in backend development, API integration, database management, project management, and web security.</span>
                        </div>

                    </div>
                </div>




            </Draggable>
        </>
    )
}