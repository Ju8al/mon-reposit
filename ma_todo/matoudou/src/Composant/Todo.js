import React, { useState } from 'react'
import List from './List'

export default function Todo() {
    const [text, setText] = useState('')
    const [element, setElement] = useState([])
    const add = () => {
        setElement([...element, text])
        setText('')
    }
    const changement = (e) => {
        setText([e.target.value])
    }

    return (
        <React.Fragment>
            <div className="input-group mt-5">
                {/* creation d'un input avec une valeur quel'on vas utiliser avec notre hook */}
                <input type="text" className="form-control" name="userInput" value={text}
                    //utilisation de la fonction onChange  
                    onChange={changement}
                />
                <div className="input-group-append">
                    <button className="input-group-text" id='add'
                        onClick={add}
                    >Ajouter</button>
                </div>

            </div>
            <List
                handlerElement={element}
                handlerText={text}
                handlerSetText={setText}
            />
        </React.Fragment>
    )
}
