import Image from "next/image";

export default function Desktop() {
    return (
        <>
            <div className="-z-50 absolute">
                <Image src={'/wallpaper/wallpaper1.jpg'}
                    width={0}
                    height={0}
                    alt="middle"
                    sizes="100vw"
                    className="w-screen h-screen z-30"
                >

                </Image>
            </div>
        </>
    )
}