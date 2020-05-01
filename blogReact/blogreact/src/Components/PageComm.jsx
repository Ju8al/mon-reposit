import React, { useState, useEffect } from 'react';
import Comm from './Comm';

export default function PageComm(props) {

    const [postInfo, setPostInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:4000${window.location.pathname}`)
            .then(reponse => reponse.json())
            .then(json => {
                setPostInfo(json)
            })
    }, [])

    return (
        <div>
            <nav className="nav h1 p-3" id="nav">Les Commentaires</nav>
            <h1 className="my-4">Voici les commentaires du poste <span className="text-danger">{postInfo.title}</span></h1>
            <Comm
                handlerPost={props.handlerPost}
                handlerSetPost={props.handlerSetPost}
                handlerPostId={props.handlerPostId}
            />
        </div>
    )
}
