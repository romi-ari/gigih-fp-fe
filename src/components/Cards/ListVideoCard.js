/*eslint-disable*/

import { NavLink } from "react-router-dom"

function ListVideoCard({ _id, title, urlImageThumbnail }) {
    return (
        <NavLink to={"/video/" + _id} className="card">
            <div className="mb-4 gap-4">
                <div className="flex flex-col p-2 rounded-lg shadow-md w-[260px] h-[220px] bg-[#1f1f1f] hover:bg-gray-500">
                    <img src={urlImageThumbnail} alt={title} className="mb-2 w-full h-auto" />
                    <p className="line-clamp-2 text-lg text-white">{title}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default ListVideoCard