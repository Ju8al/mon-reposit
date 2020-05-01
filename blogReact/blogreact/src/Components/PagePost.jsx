import React, { useState, useEffect } from 'react';
import Post from './Post';

export default function PagePost(props) {

    const [userInfo, setUserInfo] = useState({})


    useEffect(() => {

        fetch(`http://localhost:4000${window.location.pathname}`)
            .then(reponse => reponse.json())
            .then(json => {
                setUserInfo(json)
            })

    }, [])



    return (
        <div>
            <nav className="nav h1 p-3" id="nav">Les Posts</nav>
            <h1 className="my-4">Voici les articles de <span className="text-danger">{userInfo.username}</span></h1>
            <Post
                handlerPost={props.handlerPost}
                handlerSetPost={props.handlerSetPost}
                handlerId={props.handlerId}
            />
        </div>
    )
}
