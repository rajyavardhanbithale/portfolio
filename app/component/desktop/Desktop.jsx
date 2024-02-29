'use client'
import { IonIcon } from "@ionic/react";
import Image from "next/image";
import { flameOutline, folderOutline, languageOutline, personOutline } from 'ionicons/icons'



import './desktop.css'
import TopBar from "./TopBar";
export default function Desktop(props) {

    const handleProcess = (processName) => {
        props.setProcess(processList =>
            processList.includes(processName) ? processList : [...processList, processName]
        );
    }

    return (
        <>
            {/* Wallpaper  */}
            <div className="-z-50 absolute">
                <Image src={'/wallpaper/wallpaper1.webp'}
                    width={0}
                    height={0}
                    alt="middle"
                    sizes="100vw"
                    className="w-screen h-screen z-30"
                >
                </Image>
            </div>

            {/* TopBar */}
            <TopBar></TopBar>

            {/* Desktop Icon */}
            <div className="-z-40 mx-auto md:mx-0 grid grid-cols-3 md:flex md:flex-col gap-5 md:py-16 md:px-8  max-w-max capitalize text-slate-800 scale-75 md:scale-100">
                <div onClick={() => handleProcess("abt")} className="flex flex-col bg-[#1616160e] rounded-2xl p-2 glass-icon">
                    <IonIcon icon={personOutline} className="text-5xl w-full " />
                    <span className="p-1">about me</span>
                </div>

                <div onClick={() => handleProcess("proj")} className="flex flex-col bg-[#1616160e] rounded-2xl p-2 glass-icon flow-gradient">
                    <IonIcon icon={folderOutline} className="text-5xl w-full" />
                    <span className="p-1 text-center">projects</span>
                </div>

                <div onClick={() => handleProcess("skl")} className="flex flex-col bg-[#1616160e] rounded-2xl p-2 glass-icon">
                    <IonIcon icon={flameOutline} className="text-5xl w-full" />
                    <span className="p-1 text-center">skill</span>
                </div>

                <div onClick={() => handleProcess("lang")} className="flex flex-col bg-[#1616160e] rounded-2xl p-2 glass-icon">
                    <IonIcon icon={languageOutline} className="text-5xl w-full" />
                    <span className="p-1 text-center">language</span>
                </div>
            </div>
        </>
    )
}