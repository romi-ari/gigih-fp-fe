/*eslint-disable*/

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Videotron from '../components/VideoDetail/Videotron'
import Chat from '../components/VideoDetail/Chat'
import ListProductCard from '../components/Cards/ListProductCard'
import TopNav from '../components/Navbar/TopNav'

function VideoDetailPage() {
    const params = useParams()

    const getVideoUrl = 'http://localhost:8000/video-thumbnail/' + params.id
    const getProductUrl = 'http://localhost:8000/product-list/' + params.id

    const [video, setVideo] = useState({});
    const [products, setProducts] = useState([]);

    function renderProductsResults() {
        return (
            <>
                {products.map((product) => (
                        <ListProductCard 
                            key={product._id} 
                            price={product.price} 
                            title={product.title} 
                            urlImageThumbnailProduct={product.urlImageThumbnailProduct} 
                            linkProduct={product.linkProduct} 
                        />
                    ))
                }
            </>
        );
    }

    useEffect(() => {
        axios.get(getVideoUrl).then((response) => {
            setVideo(response.data.data.video);
        });


    }, []);


    useEffect(() => {
        axios.get(getProductUrl).then((response) => {
            setProducts(response.data.data.product);
        });


    }, []);

    return (
        <>
            <TopNav />
            <div className="py-10 px-20 rounded-lg bg-[#111111]">
                <div className="flex">
                    <div className='flex flex-col'>
                        <Videotron urlVideo={video.urlVideo} title={video.title} />
                        <div className='flex gap-5 mt-5 overflow-x-auto w-[1200px]'>
                            {products.length > 0 && renderProductsResults()}
                        </div>
                    </div>
                    <Chat videoId={video._id} />
                </div>
            </div>
        </>
    )
}

export default VideoDetailPage