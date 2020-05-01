import React, { useState, useEffect } from 'react'

export default function Comm(props) {

    const [comm, setComm] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/comments?postId=${props.handlerPostId}`)
            .then(reponse => reponse.json())
            .then(json => {
                setComm(json)
            })
    }, [])

    return (
        comm.map((item) => {
            return (
                <div id="divComments" key={item.id} className="container text-left">
                    <h3 >{item.name}</h3>
                    <p >{item.body}</p>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                </div>
            )
        })
    )
}
