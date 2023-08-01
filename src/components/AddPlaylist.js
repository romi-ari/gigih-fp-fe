/*eslint-disable*/

function AddPlaylist() {
    return (
        <div className="mt-3 mb-3">
            <ul>
                <div className="flex flex-col gap-3 justify-between">
                    <li className="">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded bg-[#1f1f1f]">
                            <p className="text-2xl text-gray-400">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"></path>
                                </svg>
                            </p>
                            </div>
                            <div className="ml-4">
                            <p className="text-white text-sm mb-1">Nama Playlist</p>
                            <p className="text-gray-400 text-xs">Playlist</p>
                            </div>
                        </div>
                        </li>

                        <li>
                        <div className="flex items-center">
                            <div className="flex items-center justify-center h-10 w-10 rounded bg-[#1f1f1f]">
                            <p className="text-2xl text-gray-400">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"></path>
                                </svg>
                            </p>
                            </div>
                            <div className="ml-4">
                            <p className="text-white text-sm mb-1">Nama Playlist</p>
                            <p className="text-gray-400 text-xs">Playlist</p>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default AddPlaylist