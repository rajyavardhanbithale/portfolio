'use client'
import { IonIcon } from '@ionic/react'
import './desktop.css'
import { cloudDoneOutline, contract, earthOutline, fingerPrintOutline, power, powerOutline, sunnyOutline } from 'ionicons/icons'
import { useState } from 'react';

export default function TopBar() {
    const [isFullScreen, setIsFullScreen] = useState(false);


    function handleActionButton(action) {
        switch (action) {
            case 'power':
                window.open("about:blank", "_self");
                window.close();
                break;

            case 'toggleScreen':
                if (!isFullScreen) {
                    enterFullScreen();
                } else {
                    exitFullScreen();
                }

            default:
                break;
        }
    }

    const enterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        setIsFullScreen(true);
    };

    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullScreen(false);
    };

    return (
        <>
            <div className="h-9 glass-top flex justify-between">
                <div className="px-4 py-1.5 text-2xl">
                    <IonIcon icon={sunnyOutline} />
                </div>

                <div className="flex gap-4 px-4 py-1.5 text-2xl">

                    <IonIcon icon={cloudDoneOutline}></IonIcon>
                    <IonIcon icon={earthOutline}></IonIcon>
                    <div onClick={() => handleActionButton('toggleScreen')} >
                        <IonIcon icon={contract}></IonIcon>

                    </div>

                    <div onClick={() => handleActionButton('power')} >
                        <IonIcon icon={powerOutline}></IonIcon>

                    </div>
                </div>
            </div>

        </>
    )
}