/*eslint-disable*/

import React from 'react'
import ListVideoCard from '../components/Cards/ListVideoCard';
import TopNav from '../components/Navbar/TopNav'
import { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {

    const baseURL = "http://localhost:8000/video-thumbnail-list";

    const [videos, setVideos] = useState([]);

    function renderVideosResults() {
        return (
            <>
                {
                    videos.map((video) => (
                        <ListVideoCard 
                            key={video._id} 
                            _id={video._id} 
                            title={video.title} 
                            urlImageThumbnail={video.urlImageThumbnail} 
                        />
                    ))
                }
            </>
        );
    }

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setVideos(response.data.data.video);
            })
            .catch((error) => {
                console.error('Error fetching videos:', error);
            });
    }, []);

    return (
        <div className='h-[1000px] bg-[#111111]'>
            <TopNav />
            <div className="flex flex-wrap gap-4 content-center pt-10">       
                {videos.length > 0 && renderVideosResults()}
            </div>
        </div>
    )
}

export default HomePage