import React from 'react';
import Pseudo from './Pseudo';

export default function PagePseudo(props) {
    return (
        <div>
            <nav className="nav h1 p-3" id="nav">Le Blog</nav>
            <h1 className="my-4">Retrouvez les articles de nos blogueurs préféré 😉</h1>
            <div className="container">
                <div className="d-flex justify-content-around flex-wrap">
                    <Pseudo
                        handlerUser={props.handlerUser}
                        handlerSetUser={props.handlerSetUser}
                    />
                </div>

            </div>

        </div>
    )
}
