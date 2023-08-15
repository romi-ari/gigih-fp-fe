/*eslint-disable*/

import React from 'react'

function Videotron({ title, urlVideo }) {
    return(
        <div className="mr-7 w-[1200px]">
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h2 className="truncate text-white text-2xl">{title}</h2>
                </div>
                <iframe
                    width="100%"
                    height="610"
                    src={urlVideo}
                    title="Youtube Player"
                    className='rounded-lg shadow-md bg-[#1f1f1f]'
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Videotron