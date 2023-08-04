/*eslint-disable*/

import React, { useState, useEffect } from "react"

function Search() {
    const [accessToken, setAccessToken] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    function handleSearch(e) {
      e.preventDefault();
      const searchEndpoint = `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchTerm)}&type=track`;
      fetch(searchEndpoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => response.json())
        .then((data) => setSearchResults(data.tracks.items))
        .catch((error) => console.log(error));
    }
    
    function handleSearchTermChange(e) {
      setSearchTerm(e.target.value);
    }
  
    function renderSearchResults() {
      console.log(searchResults)
      return (
        <ul className="mt-5 flex flex-wrap gap-6 mb-4">
          {searchResults.map((track) => (
            <li key={track.id}>
              <div className="flex flex-col gap-1 p-4 w-[190px] h-[280] rounded-lg shadow-md bg-[#1f1f1f]">
                  <img className="w-auto h-44 mb-2 rounded-xl shadow-md" src={track.album.images[1].url} />
                  <h2 className="truncate text-white">{track.name}</h2>
                  <p className="truncate text-gray-400">{track.artists.map((artist) => artist.name).join(", ")}</p>
              </div>     
              <button className="ml-3 mt-5" onClick={() => {
                handlePlay(track.uri)
                setCurrentTrack(`${track.name} by ${track.artists.map((artist) => artist.name).join(", ")}`); // Update the currentTrack state
              }}>Play</button>
            </li>
          ))}
        </ul>
      );
    }
  
    function handlePlay(trackUri) {
      const playEndpoint = "https://api.spotify.com/v1/me/player/play";
      fetch(playEndpoint, {
        method: "PUT",
        headers: { Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({ uris: [trackUri] }),
      }).catch((error) => console.log(error));
    }
  
    useEffect(() => {
      function extractAccessToken() {
        const token = localStorage.getItem("spotify_token");
        setAccessToken(token);
      }
  
      if (!accessToken) {
        extractAccessToken();
      }
    }, [accessToken]);

    return (
        <div className="mb-3">
            {accessToken ? (
                <div>
                    <h3 className="text-white">{currentTrack && <p>Now playing: {currentTrack}</p>}</h3>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchTermChange}
                            className="relative mt-4 w-full rounded-xl border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary bg-[#2A2A2A]"
                            placeholder="Search"
                        />
                    </form>
                    <h3 className="text-white">{renderSearchResults()}</h3>
                </div>
            ) : (
                <h3>Log In First</h3>
            )}
        </div>
    )
}

export default Search