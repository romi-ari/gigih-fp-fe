/*eslint-disable*/

import React from 'react'
import AllSong from '../components/Home/AllSongs'
import MostPlayedSong from '../components/Home/MostPlayedSong'
import RecentlyPlayed from '../components/Home/RecentlyPlayed'
import RecommendSong from '../components/Home/RecommendSong'
import Navbar from '../components/Navbar/Navbar'
import User from '../components/User'

function HomePage() {
    return (
        <>
            <div className="px-4 pt-2 ml-96">
                <Navbar />
                <div className="px-6 border-2 h-screen rounded-lg overflow-y-scroll border-gray-700 bg-gradient-to-b from-[#222222]">       
                    <User />
                    <RecommendSong />
                    <RecentlyPlayed />
                    <AllSong />
                    <MostPlayedSong />
                </div>
            </div>
        </>
    )
}

export default HomePage