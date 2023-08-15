/*eslint-disable*/

import React from "react"
import { NavLink } from "react-router-dom"

function TopNav() {
    return (
        <NavLink to="/home">
            <div className="z-50 sticky top-0 rounded-lg p-5 drop-shadow bg-[#1a1a1a]">
                <div className="flex flex-col justify-start w-auto">
                    <button className="flex items-center justify-start gap-3 pl-3 rounded-lg h-12 text-m w-auto hover:bg-gray-700">
                        <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                        <span className="text-white text-2xl font-medium">Play</span>
                    </button>
                </div>
            </div>
        </NavLink>
    )
}

export default TopNav