'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import Window from "./component/window/AboutWindow";
import WindowProject from "./component/window/ProjectWindow";

import ClockWidget from "./component/widget/ClockWidget";



export default function Home() {
  const [process, setProcess] = useState("")
  const [isOpen, setOpen] = useState(true)

  const date = new Date();
  console.log(date.toLocaleTimeString());

  return (
    <>
      <div className="-z-10 absolute">
        <ClockWidget />
      </div>
      <div className="z-10 absolute">

        {process === "abt" && <Window medium={setProcess} isOpen={isOpen} setOpen={setOpen} />}
        {process === "proj" && <WindowProject medium={setProcess} isOpen={isOpen} setOpen={setOpen} />}
      </div>
      <Desktop passChildData={setProcess} ></Desktop>

      {/* <WindowProject ></WindowProject> */}

    </>
  );
}
