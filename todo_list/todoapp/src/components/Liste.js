import React, { Component } from 'react'

export default class Liste extends Component {

    state = {
        element: ''
    }
    render() {
        return (
            <div className="container" >
                <div className="card-header">-\\\- MATOUDO. -///-</div>
                <div className="card-body">

                    <form onSubmit={this.onSubmit} >

                        <div className="form-group" >

                            <label htmlFor="element">A Faire</label>
                            <input type="text"
                                className="form-control form-control-lg"
                                name="element"
                                onChange={this.onChange}
                                value={this.state.element}
                            />
                        </div>
                        <button className="btn btn primary btn-block">
                            Ajouter une tâche
                    </button>

                    </form>

                </div>

            </div>
        )
    }

}
