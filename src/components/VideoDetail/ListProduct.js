/*eslint-disable*/

import React from "react"
import ListProductCard from '../Cards/ListProductCard'

function ListProduct() {
    return(
        <div className="flex justify-between">
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
            <ListProductCard />
        </div>
    )
}

export default ListProduct