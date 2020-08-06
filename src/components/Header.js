import React, { useState } from 'react';

// react-router-dom
import { Link, useHistory } from 'react-router-dom';

// Imagen
import logo from '../img/logo.png'

// Redux

const Header = () => {

    const history = useHistory();

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

        const seach = content.replace(/ /g, '+');

        // Enviar
        history.push(`/search=${seach}/page=1`)

        // variar
        setSeacher(
            {...seacher,
            content: ''}
        )
    }

    return(
        <div className="container-fluid header">
            <div className="row align-items-md-baseline mt-3">
                <div className="col-md-6 d-flex justify-content-center d-md-block">
                    <Link to="/page=1"><img src={logo} alt="Logo de Giphy" className="img-fluid"/></Link>
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
                        <li className="nav-item"><Link to="/page=1" className="nav-link">Trending</Link></li>
                        <li className="nav-item"><Link to="/search=random/page=1"  className="nav-link">Random</Link></li>
                        <li className="nav-item"><Link to="/search=graciosos/page=1"  className="nav-link">Graciosos</Link></li>
                        <li className="nav-item"><Link to="/search=tristes/page=1"  className="nav-link">Tristes</Link></li>
                        <li className="nav-item mt-2 mt-md-0"><Link to="/search=pelea/page=1"  className="nav-link">Pelea</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;