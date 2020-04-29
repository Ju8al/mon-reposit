import React from 'react'


export default function List(props) {

    const deleteItem = (index, id) => {
        const arr = props.handlerText;
        props.handlerElement.splice(index, 1);
        props.handlerSetText([arr]);
        fetch(`http://localhost:4000/Todo/${id}`, {
            method: "DELETE"
        }).then(props.handlerFetchTodo)
    }


    return (

        props.handlerElement.map((item, index) =>
            <div className="card mt-3" key={index} >
                <div className="card-body">
                    <h4>
                        {item.text}
                        <i style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                            // création d'une fonction anonyme (afin de passer un parametre) de suppression d'item 
                            onClick={() => deleteItem(index, item.id)}
                        >X</i>
                    </h4>

                </div>
            </div>
        )
    )
}
