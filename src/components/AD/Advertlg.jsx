import React from 'react';

// Imagen
import ruteAD from '../../img/anuncio.jpg'

const Advertlg = () => {
    return(
        <div className="col-8 offset-2 col-md-6 pt-5 offset-md-3">
            <div className="ad-large">
                <img src={ruteAD} alt="Anuncio" className="img-fluid"/>
            </div>
        </div>
    );
}

export default Advertlg;