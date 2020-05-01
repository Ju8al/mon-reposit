import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Pseudo(props) {

    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(reponse => reponse.json())
            .then(json => {
                props.handlerSetUser(json)
            })
    }, []);

    return (
        props.handlerUser.map((item) => {
            return (
                < div className="p-4 " key={item.id}>
                    <Link className=" py-2 px-5 " id="link" to={`/users/${item.id}`}>
                        {item.username}
                    </Link>
                </div >
            )
        })
    )
}
