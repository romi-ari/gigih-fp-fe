/*eslint-disable*/

import React, { useEffect, useState } from 'react'

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = "http://localhost:3000/";
const scopes = ["user-read-private", "user-read-email", "user-modify-playback-state"];

function User() {
    const [accessToken, setAccessToken] = useState(null);

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

    function saveTokenToLocalStorage(token) {
        localStorage.setItem('spotify_token', token);
        setAccessToken(token);
    }

    function handleLogout() {
        localStorage.removeItem('spotify_token');
        setAccessToken(null);
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.slice(1));
        const token = params.get("access_token");
        if (token) {
            saveTokenToLocalStorage(token);
            window.history.replaceState(null, "", window.location.pathname);
        } else {
            const storedToken = localStorage.getItem('spotify_token');
            if (storedToken) {
                setAccessToken(storedToken);
            }
        }
    }, []);

    return (
        <div className="flex items-center justify-end sticky top-0 pt-4 bg-opacity-0 bg-neutral-950">
            <div className="flex items-center gap-4">
                {accessToken ? (
                    <button onClick={handleLogout} type="button" className="rounded-full font-bold w-[111px] h-10 hover:bg-gray-700 bg-neutral-950">
                        <span className="text-white text-xl font-medium">Log Out</span>
                    </button>
                ) : (
                    <button onClick={handleLogin} type="button" className="rounded-full font-bold w-[111px] h-10 hover:bg-gray-700 bg-neutral-950">
                        <span className="text-white text-xl font-medium">Log In</span>
                    </button>
                )}
                    <button type="button" className="w-10 h-10 text-m  rounded-full md:mr-0 dark:hover:bg-gray-700 bg-neutral-950">
                        <i className="fa-regular fa-user" style={{ color: "#ffffff" }}></i>
                    </button>
            </div>
        </div>
    )
}

export default User