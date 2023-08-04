/*eslint-disable*/

import React from 'react'
import Cards from '../Card'
import { Album } from '../../Album'

function MostPlayedSong() {
    return(
        <> 
            <div>
                <div>
                    <h1 className="text-white text-2xl font-medium mb-5">Most played song</h1>
                </div>
                <Cards Album={Album} />
            </div>
        </>
    )
}

export default MostPlayedSong