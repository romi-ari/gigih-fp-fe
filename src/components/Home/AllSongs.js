/*eslint-disable*/

import React from 'react'
import Cards from '../Card'
import { Album } from '../../Album'

function AllSong() {
    return(
        <>
            <div className="mb-10">
                <div>
                    <h1 className="text-white text-2xl font-medium mb-5">All song</h1>
                </div>
                <Cards Album={Album} />
            </div>
        </>
    )
}

export default AllSong