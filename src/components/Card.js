/*eslint-disable*/

function Cards({Album}) {
    return (
        <>
            <div className="card">
                <div className="flex gap-6 mb-4">
                    {Album.map((album) =>(
                        <div key={album.id}>
                            <div className="flex flex-col gap-1 p-4 w-[190px] h-[280] rounded-lg shadow-md bg-[#1f1f1f]">
                                <img className="w-auto h-44 mb-2 rounded-xl shadow-md" src={album.img} />
                                <h2 className="truncate text-white">{album.title}</h2>
                                <p className="truncate text-gray-400">
                                    {Array.isArray(album.description) ? album.description.join(', ') : album.description}
                                </p>
                            </div>     
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cards