/*eslint-disable*/

import React, {useEffect, useState} from "react"

function RecommendSong() {
    const [accessToken, setAccessToken] = useState(null);
    const [recommendSong, setRecommendSong] = useState([]);

    function handleRecommendSong() {
      
      const searchEndpoint = `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`;
      fetch(searchEndpoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => response.json())
        .then((data) => setRecommendSong(data.tracks))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        function extractAccessToken() {
            const token = localStorage.getItem("spotify_token");
            setAccessToken(token);
        }
    
        if (!accessToken) {
            extractAccessToken();
        } else {
            handleRecommendSong(); 
        }
    }, [accessToken]);

    console.log(recommendSong)
    return(
        <>
            <div className="mb-10">
                <div>
                    <h1 className="text-white text-2xl font-medium mb-5">
                        Recommend for you
                        <button onClick={handleRecommendSong} className="ml-2 bg-gray-800 text-white px-3 py-1 rounded-md">
                        Refresh
                        </button>
                    </h1>
                    <ul className="mt-5 flex flex-wrap gap-6 mb-4">
                        {recommendSong.map((track) => (
                        <li key={track.id}>
                            <div className="flex flex-col gap-1 p-4 w-[190px] h-[280] rounded-lg shadow-md bg-[#1f1f1f]">
                                <img className="w-auto h-44 mb-2 rounded-xl shadow-md" src={track.album.images[1].url} />
                                <h2 className="truncate text-white">{track.name}</h2>
                                <p className="truncate text-gray-400">
                                    {track.artists.map((artist) => artist.name).join(", ")}
                                </p>
                            </div>   
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RecommendSong