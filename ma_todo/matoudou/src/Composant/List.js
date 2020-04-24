import React from 'react'


export default function List(props) {

    const deleteItem = index => {
        const arr = props.handlerText;
        props.handlerElement.splice(index, 1);
        props.handlerSetText([arr])
    }

    return (
        props.handlerElement.map((item, index) =>
            <div className="card mt-3" key={index}>
                <div className="card-body">
                    <h4>
                        {item}
                        <i style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                            // création d'une fonction anonyme (afin de passer un parametre) de suppression d'item 
                            onClick={deleteItem}
                        >X</i>
                    </h4>
                </div>
            </div>
        )
    )
}
