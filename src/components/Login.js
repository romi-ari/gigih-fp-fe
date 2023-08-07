/*eslint-disable*/

import React, { useEffect, useState } from 'react'

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = "http://localhost:3000/";
const scopes = ["user-read-private", "user-read-email", "user-modify-playback-state"];

function LoginPage() {
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


    return(
        <div className="flex flex-col items-center justify-center bg-[#121212] h-screen">
            <h1 className='mb-12 text-6xl font-extrabold text-white'>Welcome To Spotifu</h1>
            {accessToken ? (
                <button onClick={handleLogout} className='text-white text-2xl font-bold h-12 w-48 rounded-md border border-green-700 hover:bg-gray-700 bg-[#1f1f1f]'>Log Out</button>
            ) : (
                <button onClick={handleLogin} className='text-white text-2xl font-bold h-12 w-48 rounded-md border border-green-700 hover:bg-gray-700 bg-[#1f1f1f]'>Log In</button>
            )}
        </div>
    )
}

export default LoginPage