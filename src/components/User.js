/*eslint-disable*/

import React from 'react'

function User() {
    return (
        <div className="flex items-center justify-end sticky top-0 pt-4 bg-opacity-0 bg-neutral-950">
            <div className="flex items-center gap-4">
                <button type="button" className="rounded-full font-bold w-[111px] h-10 hover:bg-gray-700 bg-neutral-950">
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