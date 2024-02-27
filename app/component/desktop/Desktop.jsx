'use client'
import { IonIcon } from "@ionic/react";
import Image from "next/image";
import { flameOutline, folderOutline, languageOutline, personOutline } from 'ionicons/icons'



import './desktop.css'
export default function Desktop(props) {
    
    const handleProcess = (processName) =>{
        props.passChildData(processName)
    }

    return (
        <>
            {/* Wallpaper  */}
            <div className="-z-50 absolute">
                <Image src={'/wallpaper/wallpaper1.jpg'}
                    width={0}
                    height={0}
                    alt="middle"
                    sizes="100vw"
                    className="w-screen h-screen z-30"
                >
                </Image>
            </div>
            

            {/* Desktop Icon */}
            <div className="flex flex-col gap-5 py-16 px-8 max-w-max capitalize text-slate-800">
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