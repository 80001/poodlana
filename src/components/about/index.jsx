import React from 'react'

const About = () => {
    return (
        <div id="about" className="w-full relative bg-black h-[800px] max-lg:h-[242px]">
            <div
                className="size-full"
                style={{ transform: 'scale(0.9) translateZ(0px)' }}
            >
                <iframe
                    className="absolute top-0 left-0 size-full"
                    src="https://www.youtube.com/embed/B_0h5Tqrv9c?controls=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default About