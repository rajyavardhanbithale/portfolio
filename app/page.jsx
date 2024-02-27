'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import Window from "./component/window/WindowAbout";



export default function Home() {
  const [process,setProcess] = useState("")
  const [isOpen,setOpen] = useState(true)

  console.log(process);
  console.log(isOpen);
  return (
    <>
      <Desktop passChildData={setProcess} ></Desktop>
      
      {process === "abt" && <Window medium={setProcess} isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
}
