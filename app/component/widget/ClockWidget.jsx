'use client'
// import dynamic from 'next/dynamic';
// const Clock = dynamic(() => import('react-live-clock'), { ssr: false });

import Clock from 'react-live-clock'
import { Lato } from 'next/font/google';
import { useState } from 'react';
const raleway = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

import './widget.css'
export default function ClockWidget() {
    const [displayNumber, setDisplayNumber] = useState(true)

    setTimeout(() => {
        setDisplayNumber(false)
    }, 800);


    console.log(displayNumber);


    return (
        <>
            {displayNumber ? (
                <>
                    <div className="flex flex-col justify-center items-center w-screen h-screen">
                        <div class="loader "></div>

                    </div>
                </>
            ) : (
                <>
                    <div className="-z-50 animate-fade animate-ease-in text-gray-900 flex flex-col justify-center items-center w-screen h-screen">
                        <div className="">

                            <Clock
                                format={'h'}
                                className={`${raleway.className} text-5xl lg:text-6xl`}
                                ticking={true}
                                noSsr={true} />

                            <span className="text-4xl mx-2 lg:text-5xl"> : </span>

                            <Clock
                                format={'mm'}
                                className={`${raleway.className} text-4xl lg:text-5xl`}
                                ticking={true}
                                noSsr={true} />

                            <span className="text-3xl mx-2 lg:text-4xl"> : </span>

                            <Clock
                                format={'ss'}
                                className={`${raleway.className} text-3xl lg:text-4xl`}
                                ticking={true}
                                noSsr={true} />

                            <span className="text-2xl mx-2 lg:text-3xl"> : </span>
                            <Clock
                                format={'A'}
                                className={`${raleway.className} text-2xl lg:text-3xl`}
                                ticking={true}
                                noSsr={true} />

                            {/* Break line */}
                            <div className="w-full h-0.5 m-1 bg-gray-800 opacity-80"></div>

                            <Clock
                                format={'dddd, MMMM Mo'}
                                className={`${raleway.className} text-2xl lg:text-3xl`}
                                ticking={true}
                                noSsr={true} />

                        </div>


                    </div>
                </>
            )}
        </>
    );
}