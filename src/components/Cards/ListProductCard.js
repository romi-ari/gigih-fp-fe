/*eslint-disable*/

function ListProductCard({ title, price, urlImageThumbnailProduct }) {
    return (
        <>
            <div className="flex flex-col flex-shrink-0 rounded-lg items-center p-2 gap-4 mt-2 w-[215px] h-[352px] bg-zinc-800">
                <img src={urlImageThumbnailProduct} className="rounded-lg shadow-md w-[200px] h-[264px] bg-[#1f1f1f] hover:bg-gray-500" />
                <div className="flex w-full">
                    <div className="flex flex-col items-start gap-2">
                        <h2 className="line-clamp-1 text-white">{title}</h2>
                        <p className="text-gray-300">Rp {price}</p>    
                    </div>
                </div>      
            </div>
        </>
    )
}

export default ListProductCard