/*eslint-disable*/

import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Chat({videoId}) {
    const formRef = useRef()

    const commentUrl = 'http://localhost:8000/comment-list/' + videoId
    const postCommentUrl = 'http://localhost:8000/comment/'

    const [comment, setComment] = useState([])
    const [username, setUsername] = useState("")
    const [postComment, setPostComment] = useState("")
    const [isUsernameEntered, setIsUsernameEntered] = useState(false)

    const handleCommentChange = (e) => {
        const value = e.target.value
        setPostComment(value)
    }

    const handleUsernameChange = (e) => {
        const value = e.target.value
        setUsername(value)
        console.log(value)
    }

    const getCommentData = async () => {
        try {

            const response = await axios.get(commentUrl)

            setComment(response.data.data.comment)
        } catch (err) {
            console.error('Error fetching data:', err)
            throw new Error('Unable to fetch data')
        }
    }

    const sendComment = (e) => {
        e.preventDefault()
        if (!videoId) {
            return
        }
        const commentData = {
            username: username,
            comment: postComment,
            videoId: videoId
        };

        formRef.current.reset()

        axios.post(postCommentUrl, commentData)
            .then(function (response) {
                console.log(response)
            })
            .then(() => {
                getCommentData()

            }
            )
            .catch(function (error) {
                console.log(error)
            });
    }

    useEffect(() => {
        if (videoId) {
            getCommentData()
        }

    }, [videoId]);

    return(
        <div className="mt-[50px] w-[516px] h-[985px] rounded-lg border-gray-500 border-2">
            <div className="flex items-center pl-4 rounded-t-lg w-[512px] h-[60px] border-gray-500 border-b-2">
                <h2 className="text-white text-2xl">Chat</h2>
            </div>
            <div className="pl-4 pt-2 w-[512px] h-[820px] overflow-y-scroll ">
                {comment.map((comments) => (
                        <div className="chat chat-start">
                            <div className="chat-header">
                                {comments.username}
                            </div>
                            <div className="chat-bubble">{comments.comment}</div>
                        </div>
                    ))
                }
            </div>
            <form ref={formRef} className="flex flex-col gap-1 px-4 pt-2 rounded-b-lg w-[512px] h-[100px] border-gray-500 border-t-2" onSubmit={sendComment}>
                {isUsernameEntered ? (
                    <>
                        <h2 className="text-white text-l">
                            {isUsernameEntered ? `${username}` : "Username"}
                        </h2>
                        <input
                            className="w-auto h-[30px] outline-none bg-transparent"
                            placeholder="Input text here ..."
                            name="comment"
                            onChange={handleCommentChange}
                        />
                    </>
                ) : (
                    <>
                        <h2 className="text-white text-l">Username</h2>
                        <input
                            className="w-auto h-[30px] outline-none bg-transparent"
                            placeholder="Input username here ..."
                            name="username"
                            onChange={handleUsernameChange}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    setIsUsernameEntered(username !== "")
                                }
                            }}

                        />
                    </>
                )}
                <div className="h-px bg-gray-200 border-0 dark:bg-gray-700"></div>
            </form>
        </div>
    )
}

export default Chat