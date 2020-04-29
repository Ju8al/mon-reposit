import React from 'react'

export default function DeleteAll(props) {

    const deleteAllItems = () => {
        props.handlerElement.map((item) =>
            fetch(`http://localhost:4000/Todo/${item.id}`, {
                method: "DELETE"
            }).then(props.handlerFetchTodo)
        )

    }

    return (
        <React.Fragment>
            <div>
                <button id="del" type="button" className="btn btn-light border mt-3"
                    onClick={deleteAllItems}
                >Supprimer toutes les todo</button>
            </div>
        </React.Fragment>
    )
}
