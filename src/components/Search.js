/*eslint-disable*/

import React from "react"

function Search() {
    return (
        <div class="mb-3">
            <input
                type="search"
                className="relative mt-4 w-full rounded-xl border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary bg-[#2A2A2A]"
                placeholder="Search" 
            />
        </div>
    )
}

export default Search