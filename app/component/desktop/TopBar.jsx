
import { IonIcon } from '@ionic/react'
import './desktop.css'
import { cloudDoneOutline, contract, earthOutline, fingerPrintOutline, powerOutline, sunnyOutline } from 'ionicons/icons'
export default function TopBar() {
    return (
        <>
            <div className="h-9 glass-top flex justify-between">
                <div className="px-4 py-1.5 text-2xl">
                    <IonIcon icon={sunnyOutline} />
                </div>

                <div className="flex gap-4 px-4 py-1.5 text-2xl">
                    <IonIcon icon={cloudDoneOutline}></IonIcon>
                    <IonIcon icon={earthOutline}></IonIcon>
                    <IonIcon icon={contract}></IonIcon>
                    <IonIcon icon={powerOutline}></IonIcon>
                </div>
            </div>

        </>
    )
}