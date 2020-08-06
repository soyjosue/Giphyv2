import {
    DESCARGAR_GIPHY,
    DESCARGAR_GIPHY_EXITO,
    DESCARGAR_GIPHY_ERROR,
    CAMBIAR_PAGE,
    BUSCAR_GIPHY,
    BUSCAR_GIPHY_EXITO,
    BUSCAR_GIPHY_ERROR
} from '../types';

// Axios
import clienteAxios from '../config/axios';

const keyApi= 'oaPZBPBuQ4DMHRppXm7ZXzje5oVFVoqA';
const limitApi= 10;

export function obtenerGiphyAction(page) {
    return async dispath => {
        dispath( descargarGiphy() )
        
        let pages = page;

        if(!(pages === 0)) {
            pages = pages * 10;
        }

        try {
            const gifs = await clienteAxios.get(`/trending?api_key=${keyApi}&limit=${limitApi}&offset=${pages}`);
            const pagMax = gifs.data.pagination.total_count/10 > 4999 ? parseInt(4999/10): parseInt(gifs.data.pagination.total_count/10);
            // console.log(pagMax);
            dispath( exitoDescargarGiphy({gifsList: gifs.data.data, pagMax }) )
            
        } catch (error) {
            dispath( errorDescargarGiphy() )
        }
    }
}

const descargarGiphy = () => ({
    type: DESCARGAR_GIPHY,
    payload: true
});
const exitoDescargarGiphy = ({gifsList, pagMax}) => ({
    type: DESCARGAR_GIPHY_EXITO,
    payload: {
        gifsList,
        pagMax
    }
});
const errorDescargarGiphy = () => ({
    type: DESCARGAR_GIPHY_ERROR
})

export function nextPageGiphyAction(nextPage) {
    return dispatch => {
        dispatch( nextPageGiphy(nextPage) )
    }
}

const nextPageGiphy = (numPage) => ({
    type: CAMBIAR_PAGE,
    payload: numPage
});

export function buscarGiphyAction(content, page) {

    return async dispatch => {
        dispatch( buscarGiphy() );

        let pages = page;
        if(!(pages === 0)) {
            pages = pages * 10;
        }

        console.log(keyApi, content, pages);
        try {
            const gifs = await clienteAxios.get(`/search?api_key=${keyApi}&q=${content}&limit=10&offset=${pages}`);
            const pagMax = gifs.data.pagination.total_count/10 > 4999 ? parseInt(4999/10): parseInt(gifs.data.pagination.total_count/10);
            // console.log(gifs);
            dispatch( buscarGiphyExito({gifsList: gifs.data.data, pagMax}) );

        } catch (error) {
            console.log(error);
            dispatch( buscarGiphyError() );
        }
    }
}
const buscarGiphy = () => ({
    type: BUSCAR_GIPHY,
    payload: true
}) ;
const buscarGiphyExito = ({gifsList, pagMax, pages}) => ({
    type: BUSCAR_GIPHY_EXITO,
    payload: {
        gifsList,
        pagMax
    }
});
const buscarGiphyError = () => ({
    type: BUSCAR_GIPHY_ERROR
});