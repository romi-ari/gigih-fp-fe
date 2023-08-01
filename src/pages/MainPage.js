/*eslint-disable*/

import React from 'react'
import AllSong from '../components/AllSongs'
import MostPlayedSong from '../components/MostPlayedSong'
import RecentlyPlayed from '../components/RecentlyPlayed'
import Navbar from '../components/Navbar'
import User from '../components/User'

function MainPage() {
    return (
        <>
            <div className="px-4 pt-2 ml-96">
                <Navbar />
                <div className="px-6 border-2 h-screen rounded-lg overflow-y-scroll border-gray-700 bg-gradient-to-b from-[#222222]">       
                    <User />
                    <RecentlyPlayed />
                    <AllSong />
                    <MostPlayedSong />
                </div>
            </div>
        </>
    )
}

export default MainPage