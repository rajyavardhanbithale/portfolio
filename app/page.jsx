'use client'
import { useState } from "react";
import Desktop from "./component/desktop/Desktop";
import Window from "./component/window/WindowAbout";



export default function Home() {
  const [process,setProcess] = useState("")

  console.log(process);
  return (
    <>
      <Desktop passChildData={setProcess} ></Desktop>
      
      {process === "abt" && <Window medium={setProcess}/>}
    </>
  );
}
