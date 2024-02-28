'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import Window from "./component/window/AboutWindow";
import WindowProject from "./component/window/ProjectWindow";



export default function Home() {
  const [process, setProcess] = useState("")
  const [isOpen, setOpen] = useState(true)

  console.log(process);
  console.log(isOpen);
  return (
    <>
    <div className="absolute">
      {process === "abt" && <Window medium={setProcess} isOpen={isOpen} setOpen={setOpen} />}
      {process === "proj" && <WindowProject medium={setProcess} isOpen={isOpen} setOpen={setOpen} />}
    </div>
      <Desktop passChildData={setProcess} ></Desktop>

    </>
  );
}
