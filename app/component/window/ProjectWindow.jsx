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
    const [open, setOpen] = useState(props.process.includes("proj"))

    function handleClose(){
        setOpen(false)
        setTimeout(()=>{
            props.removeProcess(processList => processList.filter(proc => proc !== "proj"))
        },200)
    }
   
    return (
        <>
            <Draggable defaultPosition={{ x: 0, y: 0 }} >
                <div className={`z-10 w-full `}>
                    <div className={`${open ? 'animate-jump-in animate-duration-300 animate-ease-in' : 'animate-jump-out animate-duration-300 animate-ease-in '} shadow-xl }`}>

                        {/* Titlebar */}
                        <TitleBar title={"project"} handleClose={handleClose} />

                        {/* Window Body */}
                        <div className="p-0 card bg-[#212024] rounded-b-lg ">
                            <div className="flex flex-row w-full  justify-center align-middle text-center  capitalize">
                                {/* Left Part */}
                                <div className="card-left px-4">
                                    {/* Year Wise */}
                                    <div className="flex font-semibold  mt-5">
                                        <span className="text-lg text-white">Year</span>
                                    </div>
                                    <div className="text-gray-50 text-xl pl-4 max-w-max px-2">

                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2020</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2021</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2022</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2023</span>
                                        </div>

                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={calendarClearOutline} className="mt-1 ml-1.5"></IonIcon>
                                            <span>2024</span>
                                        </div>


                                    </div>

                                    {/* Language Wise */}
                                    <div className="flex font-semibold mt-5">
                                        <span className="text-lg text-white">Language</span>
                                    </div>
                                    <div className="text-gray-50 text-xl pl-4 ">
                                        <div className="flex align-middle gap-2 py-1  hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={logoPython} className="mt-1 ml-1.5 "></IonIcon>
                                            <span>Python</span>
                                        </div>
                                        <div className="flex align-middle gap-2 py-1 hover:opacity-60 transition duration-300 ease-in hover:scale-[1.005] cursor-pointer">
                                            <IonIcon icon={logoJavascript} className="mt-1 ml-1.5"></IonIcon>
                                            <span>Javascript</span>
                                        </div>

                                    </div>
                                </div>

                                {/* Right Part */}
                                <div className="grid grid-cols-4 gap-2">

                                    {project.map((info, idx) => (
                                        <div key={idx} className="flex flex-col p-1 m-5  items-center rounded-xl">
                                            <img src={info.icon} className="w-28 rounded-2xl" alt="" />
                                            <span className="mt-2 text-zinc-50 font-semibold text-base">{info.title}</span>
                                        </div>
                                    ))}


                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Draggable>
        </>
    )
}