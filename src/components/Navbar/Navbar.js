/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import AddPlaylist from '../AddPlaylist'

function Navbar() {
  return (
    <div>
      {/*Top Nav */}
      <div className="fixed top-0 left-0 w-96 mx-2 mt-2 rounded-lg border-2 border-gray-700 bg-[#121212]">
          <div className="flex flex-col justify-start w-auto">
              <Link to="/" className="flex items-center justify-start gap-3 pl-3 rounded-lg h-12 text-m w-auto hover:bg-gray-700">
                <i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>
                <span className="text-white">Home</span>
              </Link>
              <Link to="/search" className="flex items-center justify-start gap-3 pl-3 rounded-lg h-12 text-m w-auto hover:bg-gray-700">
                <i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i>
                <span className="text-white">Search</span>
              </Link>
          </div>
      </div>
      {/*Side Nav */}
      <div className="fixed top-0 left-0 w-96 mt-[116px] mx-2 border-2 h-screen rounded-lg border-gray-700">
        <div className="h-full px-3 pb-4 bg-[#121212]">
          <ul className="space-y-2 font-medium">
            <li className="">
              <div className="flex items-center justify-between">
                <div className="flex items-center pt-3 pb-3 rounded-lg dark:text-white">
                    <i className="fa-solid fa-music" style={{color: "#ffffff"}}></i>
                    <span className="ml-3">Playlist</span>
                </div>
                <div className="pt-3 pb-3">
                    <i className="fa-solid fa-plus" style={{color: "#ffffff"}}></i>
                </div>
              </div>
            </li>
          </ul>
          {/*Playlist */}
          <AddPlaylist />
        </div>
      </div>
    </div>
  )
}

export default Navbar
