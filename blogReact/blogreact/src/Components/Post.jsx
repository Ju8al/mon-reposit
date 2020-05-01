import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Post(props) {

    useEffect(() => {
        fetch(`http://localhost:4000/posts?userId=${props.handlerId}`)
            .then(reponse => reponse.json())
            .then(json => {
                props.handlerSetPost(json)
            })
    }, [])
    return (
        props.handlerPost.map((item) => {
            return (
                <div id="divPosts" key={item.id} className="container text-left">
                    <h3 >{item.title}</h3>
                    <p >{item.body}</p>
                    <Link to={`/posts/${item.id}`}>
                        Commentaires
                    </Link>
                </div>
            )
        })
    )
}
