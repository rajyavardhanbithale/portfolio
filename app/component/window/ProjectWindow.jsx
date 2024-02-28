'use client'

import { useState } from "react"
import Draggable from "react-draggable"
import TitleBar from "../titlebar/TitleBar"
import { IonIcon } from "@ionic/react"
import { calendarClearOutline, codeOutline, logoGithub, logoJavascript, logoPython } from "ionicons/icons"

import './window.css'
import { project } from './projects'
// Follow File Manager Theme
export default function WindowProject(props) {
    const [open, setOpen] = useState(props.isOpen)

    console.log(project);
    return (
        <>
            <Draggable defaultPosition={{ x: 0, y: 0 }} >
                <div className={` w-full `}>
                    <div className={`${open ? 'animate-jump-in animate-duration-500 animate-ease-in' : 'animate-jump-out animate-duration-300 animate-ease-in '} shadow-xl }`}>

                        {/* Titlebar */}
                        <TitleBar title={"project"} />

                        {/* Window Body */}
                        <div className="p-0 card bg-[#212024] rounded-b-lg ">
                            <div className="flex flex-row w-full justify-center align-middle text-center px-2 md:px-2 capitalize">
                                {/* Left Part */}
                                <div>
                                    {/* Year Wise */}
                                    <div className="flex font-semibold px-2 mt-5">
                                        <span className="text-lg text-white">Year</span>
                                    </div>
                                    <div className="text-gray-50 text-xl pl-4 ">

                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2020</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2021</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2022</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2023</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2024</span>
                                        </div>


                                    </div>

                                    {/* Language Wise */}
                                    <div className="flex font-semibold px-2 mt-5">
                                        <span className="text-lg text-white">Language</span>
                                    </div>
                                    <div className="text-gray-50 text-xl pl-4 ">
                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={logoPython} className="mt-1 ml-1.5"></IonIcon>
                                            <span>Python</span>
                                        </div>
                                        <div className="flex align-middle gap-2 py-1">
                                            <IonIcon icon={logoJavascript} className="mt-1 ml-1.5"></IonIcon>
                                            <span>Javascript</span>
                                        </div>

                                    </div>
                                </div>

                                {/* Right Part */}
                                <div className="flex flex-col gap-2">

                                    {project.map((info, idx) => {
                                        <div key={idx} className="flex flex-col p-1 m-5  items-center rounded-xl">
                                            <IonIcon icon={logoGithub} className="text-8xl p-1 rounded-xl glass-icon-fm" />
                                            <span className="mt-2 text-zinc-50 font-semibold text-base">PLACEHOLDER</span>
                                        </div>
                                    })}


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Draggable>
        </>
    )
}