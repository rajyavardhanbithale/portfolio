'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import WindowAbout from "./component/window/AboutWindow";
import WindowProject from "./component/window/ProjectWindow";

import ClockWidget from "./component/widget/ClockWidget";



export default function Home() {
  const [process, setProcess] = useState([])
  

  console.log(process);

  return (
    <>
      {/* <div>{process}</div> */}
      
      <div className="-z-10 absolute">
      
        <ClockWidget />
      </div>
      <Desktop setProcess={setProcess} ></Desktop>
      <div className="z-10 absolute">
        {process.includes("abt") && <WindowAbout process={process} removeProcess={setProcess}  />}
        {process.includes("proj") && <WindowProject process={process}  removeProcess={setProcess} />}
      </div>

      {/* <WindowProject ></WindowProject> */}

    </>
  );
}
