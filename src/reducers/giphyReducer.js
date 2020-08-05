import {
    DESCARGAR_GIPHY,
    DESCARGAR_GIPHY_EXITO,
    DESCARGAR_GIPHY_ERROR,
    CAMBIAR_PAGE,
    MODAL_OPEN,
    MODAL_CLOSE
} from '../types';


// State inicial
const initialState = {
    giphys: [],
    pageactual: 0,
    pagemax: null,
    loading: false,
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case DESCARGAR_GIPHY:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGAR_GIPHY_EXITO:
            return {
                ...state,
                giphys: action.payload.gifsList,
                pagemax: action.payload.pagMax,
                loading: false,
                error: null
            }
        case DESCARGAR_GIPHY_ERROR:
            return {
                ...state,
                giphys: [],
                loading: false,
                error: true
            }
        case CAMBIAR_PAGE:
            return {
                ...state,
                pageactual: action.payload
            }
        default: 
            return state
    }
}

