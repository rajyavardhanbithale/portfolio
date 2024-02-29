'use client'
import { IonIcon } from '@ionic/react'
import './desktop.css'
import { cloudDoneOutline, contract, earthOutline, fingerPrintOutline, power, powerOutline, sunnyOutline } from 'ionicons/icons'
export default function TopBar() {

    function handleActionButton(action) {
        switch (action) {
            case 'power':
                window.open("about:blank", "_self");
                window.close();
                break;

            case 'maxi':
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

            default:
                break;
        }
    }

    return (
        <>
            <div className="h-9 glass-top flex justify-between">
                <div className="px-4 py-1.5 text-2xl">
                    <IonIcon icon={sunnyOutline} />
                </div>

                <div className="flex gap-4 px-4 py-1.5 text-2xl">

                    <IonIcon icon={cloudDoneOutline}></IonIcon>
                    <IonIcon icon={earthOutline}></IonIcon>
                    <div onClick={() => handleActionButton('maxi')} >
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