'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import WindowAbout from "./component/window/AboutWindow";
import WindowProject from "./component/window/ProjectWindow";

import ClockWidget from "./component/widget/ClockWidget";
import { IonIcon } from "@ionic/react";
import { flameOutline, folderOutline, languageOutline, personOutline } from "ionicons/icons";



export default function Home() {
  const [process, setProcess] = useState([])

  const handleProcess = (processName) => {
    setProcess(processList =>
      processList.includes(processName) ? processList : [...processList, processName]
    );
  };

  console.log(process);


  return (
    <>
     

      <div className="absolute">
        {process.includes("abt") && <WindowAbout process={process} removeProcess={setProcess} />}
        {process.includes("proj") && <WindowProject process={process} removeProcess={setProcess} />}
        {process.includes("lang") && <WindowProject process={process} removeProcess={setProcess} />}
      </div>



      <div className="-z-10 absolute">
        <ClockWidget />
      </div>

      <Desktop setProcess={setProcess}></Desktop>
      

    </>
  );
}
