import React, { useState } from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

// Imagen
import logo from '../img/logo.png'

const Header = () => {

    const [ seacher, setSeacher ] = useState({
        content: ''
    })

    const { content } = seacher;

    const onChangeTyping = e => {
        setSeacher({
            [e.target.name]: e.target.value
        })
    }

    const onClickSeach = () => {
        // Comprobar
        if(content.trim() === '') {
            return null;
        }

        // Enviar
        console.log(content);
    }

    return(
        <div className="container-fluid header">
            <div className="row align-items-md-baseline mt-3">
                <div className="col-md-6 d-flex justify-content-center d-md-block">
                    <Link to="/"><img src={logo} alt="Logo de Giphy" className="img-fluid"/></Link>
                </div>
                <div className="col-md-6 mt-2 mt-md-0">

                    <div className="input-group">
                        <input 
                            type="text" 
                            name="content"
                            className="form-control"
                            placeholder="Buscar"
                            aria-describedby="button-addon2"
                            value={content}
                            onChange={onChangeTyping}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                id="button-addon2"
                                onClick={onClickSeach}
                            >Buscar</button>
                        </div>
                    </div>

                </div>
            </div>
            <hr/>
            <div className="row menu">
                <div className="col">
                    <ul className="nav nav-pills nav-fill nav-tabs">
                    <li className="nav-item"><a href="#!" className="nav-link">Trending</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Ramdon</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Graciosos</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Tristes</a></li>
                    <li className="nav-item"><a href="#!" className="nav-link">Pelea</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;