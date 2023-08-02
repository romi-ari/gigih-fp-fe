/*eslint-disable*/

import React from 'react'

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = "http://localhost:3000/";
const scopes = ["user-read-private", "user-read-email", "user-modify-playback-state"];

function User() {
  
    function handleLogin() {
        const authEndpoint = "https://accounts.spotify.com/authorize";
        const queryParams = new URLSearchParams({
          client_id,
          response_type: "token",
          redirect_uri,
          scope: scopes.join(" "),
        })
        window.location = `${authEndpoint}?${queryParams}`
    }

    return (
        <div className="flex items-center justify-end sticky top-0 pt-4 bg-opacity-0 bg-neutral-950">
            <div className="flex items-center gap-4">
                <button onClick={handleLogin} type="button" className="rounded-full font-bold w-[111px] h-10 hover:bg-gray-700 bg-neutral-950">
                    <span className="text-white text-xl font-medium">Sign In</span>
                </button>
                <button type="button" className="w-10 h-10 text-m  rounded-full md:mr-0 dark:hover:bg-gray-700 bg-neutral-950">
                    <span className="sr-only">Open user menu</span>
                    <i className="fa-regular fa-user" style={{color: "#ffffff"}}></i>
                </button>
            </div>
        </div>
    )
}

export default User