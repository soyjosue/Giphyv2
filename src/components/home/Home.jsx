import React, { useEffect, useState } from 'react';

import Advertlg from '../AD/Advertlg';
import Gif from '../Gif';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerGiphyAction, nextPageGiphyAction } from '../../actions/giphyAction';

// History

import { useHistory, useParams } from 'react-router-dom';
 
const Home = () => {
    let {id} = useParams();

    // console.log('El id es' + id);
    const history = useHistory();

    // Redux
    const dispath = useDispatch();
    
    // State Redux
    const gifs = useSelector(state => state.giphy.giphys);
    const pageActual = useSelector(state => state.giphy.pageactual);
    const pageMax = useSelector(state => state.giphy.pagemax);

    useEffect(() => {
        if(id === undefined) {
            dispath(obtenerGiphyAction(pageActual));
            history.push(`/page=${pageActual+1}`);
        } else {
            dispath( nextPageGiphyAction(parseInt(id)) );
            dispath(obtenerGiphyAction(pageActual));
        }

        // eslint-disable-next
    }, []);

    useEffect(() => {
        dispath(obtenerGiphyAction(pageActual));
        history.push(`/page=${pageActual+1}`)

        // eslint-disable-next
    }, [pageActual])

    const onClickPage = e => {

        switch(e.target.id) {
            case 'first': 
                dispath(nextPageGiphyAction(0))
                break;
            case 'previous':
                dispath(nextPageGiphyAction(pageActual-1))
                break;
            case 'next':
                dispath(nextPageGiphyAction(pageActual+1))
                break;
            case 'last':
                dispath(nextPageGiphyAction(pageMax))
                break;
            default:
                dispath(nextPageGiphyAction(parseInt(e.target.id)))
        }
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            {gifs.map(gif => (
                                <Gif
                                    key={gif.id}
                                    gif={gif}
                                />
                            ))}             
                        </div>
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center pt-4">
                    {
                        !(pageActual === 0) ? 
                            (
                                <>
                                    <div className="border d-none d-md-block py-2 px-3 ml-1">
                                        <button 
                                            className="btn p-0" 
                                            id="first"
                                            onClick={onClickPage}
                                        >{'Primera'}</button>
                                    </div>

                                    <div className="border py-2 px-3 ml-1"> 
                                        <button 
                                            className="btn p-0" 
                                            id="previous"
                                            onClick={onClickPage}
                                        >{'<'}</button> 
                                    </div>
                                </>
                            )
                        :null
                    }

                    <div className="border py-2 px-3 ml-1"> 
                        <button 
                            className="btn p-0" 
                            id={pageActual}
                            onClick={onClickPage}
                        >{pageActual+1}</button> 
                    </div>

                    {
                        (pageActual <= pageMax-1) ?
                                <div className="border py-2 px-3 ml-1"> 
                                    <button 
                                        className="btn p-0" 
                                        id={pageActual+1}
                                        onClick={onClickPage}
                                    >{pageActual+2}</button> 
                                </div>
                        :null
                    }

                    {
                        (pageActual <= pageMax-2) ?
                        (
                            <>
                                <div className="border py-2 px-3 ml-1"> 
                                    <button 
                                        className="btn p-0" 
                                        id={pageActual+2}
                                        onClick={onClickPage}
                                    >{pageActual+3}</button> 
                                </div>
                            </>
                        ) : null
                    }

                    {
                        (pageActual <= pageMax-3) ?
                            <div className="border py-2 px-3 ml-1"> 
                                <button 
                                    className="btn p-0" 
                                    id={pageActual+3}
                                    onClick={onClickPage}
                                >{pageActual+4}</button> 
                            </div> :null
                    }

                    {
                        (pageActual <= pageMax-4) ?
                            <div className="border py-2 px-3 ml-1"> 
                                <button 
                                    className="btn p-0" 
                                    id={pageActual+4}
                                    onClick={onClickPage}
                                >{pageActual+5}</button> 
                            </div> :null
                    }

                    {
                        !(pageActual === pageMax) ? 
                        (
                        <>
                            <div className="border py-2 px-3 ml-1"> <button className="btn p-0" id="next" onClick={onClickPage}>{'>'}</button> </div>
                            <div className="border d-none d-md-block py-2 px-3 ml-1"> <button className="btn p-0" id="last" onClick={onClickPage}>{'Ultima'}</button> </div>
                        </>
                        )
                    : null
                    }
                    
                </div>
                <Advertlg />
            </div>
        </div> 
    );
}

export default Home;