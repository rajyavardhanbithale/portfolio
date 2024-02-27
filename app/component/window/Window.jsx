'use client'
import Draggable from "react-draggable";

export default function Window() {
    const config = {
        "title": "temp"
    }
    return (
        <>
            <Draggable>

                <div className="w-[50%]">
                    <div className="bg-[#333333] rounded-lg px-5 py-2 flex justify-start gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="absolute flex w-full top-1 left-2 justify-center">
                        <span className="text-gray-100 font-semibold text-base">{config.title}</span>
                    </div>
                </div>


            </Draggable>
        </>
    )
}