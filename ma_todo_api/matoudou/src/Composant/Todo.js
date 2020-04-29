import React, { useState, useEffect } from 'react'
import List from './List'
import DeleteAll from './DeleteAll'

export default function Todo() {
    //creation du hook des todo
    const [element, setElement] = useState([])
    //creation du hook des text present dans les todo
    const [text, setText] = useState('')

    //fonction d'ajout d'un text dans une todo
    const add = () => {
        // un texte doit être entré pour lancer l'ajout
        if (text === '') {
            alert("Entrez une tâche")
        } else {
            setElement([...element, text])
            fetch('http://localhost:4000/Todo', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text })

            }).then(fetchTodo)
            setText('');
        }
    }

    const fetchTodo = async () => {
        const result = await fetch('http://localhost:4000/Todo');
        const data = await result.json();

        setElement(data);
    }
    useEffect(() => {
        fetchTodo();
    }, []);

    // methode de regard sur les actions de l'utilisateur
    const changement = (e) => {
        setText(e.target.value)
    }

    return (
        <React.Fragment>
            <div className="input-group mt-5">
                {/* creation d'un input avec une valeur que l'on vas utiliser avec notre hook */}
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
            <DeleteAll
                handlerFetchTodo={fetchTodo}
                handlerElement={element}
                handlerText={text}
                handlerSetText={setText}
            />
        </React.Fragment>
    )
}
