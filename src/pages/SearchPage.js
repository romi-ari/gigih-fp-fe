/*eslint-disable*/

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import User from '../components/User'
import Search from '../components/Search'

function SearchPage() {
    return (
        <div className="px-4 pt-2 ml-96">
            <Navbar />
            <div className="px-6 border-2 h-screen rounded-lg overflow-y-scroll border-gray-700 bg-gradient-to-b from-[#222222]">       
                <User />
                <Search />
            </div>
        </div>
    )
}

export default SearchPage