import React, { useEffect } from 'react';
import Gif from '../components/Gif';
import Error402 from '../components/Error/Error402';

import { useParams, useHistory } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { buscarGiphyAction, nextPageGiphyAction } from '../actions/giphyAction';

const Seach = () => {

    // Route
    let {seach, page} = useParams();
    const history = useHistory();

    // Redux
    const dispatch = useDispatch();
    const pageActual = useSelector(state => state.giphy.pageactual);
    const pageMax = useSelector(state => state.giphy.pagemax);
    const gifs = useSelector(state => state.giphy.giphys);
    
    useEffect(() => {
        dispatch( buscarGiphyAction(seach, parseInt(page) - 1) );
        dispatch( nextPageGiphyAction(page-1) );
        // eslint-disable-next-line
    }, [seach, page])

    const onClickPage = e => {

        let pages = pageActual+1;

        switch(e.target.id) {
            case 'first': 
                history.push(`/search=${seach}/page=1`)
                break;
            case 'previous':
                history.push(`/search=${seach}/page=${pages-1}`)
                break;
            case 'next':
                history.push(`/search=${seach}/page=${pages+1}`)
                break;
            case 'last':
                history.push(`/search=${seach}/page=${pageMax}`)
                break;
            default:
                history.push(`/search=${seach}/page=${parseInt(e.target.id) + 1}`)
        }
    }

    const error = gifs.length === 0 ? <Error402 /> : null
    console.log(gifs);
    console.log(error);

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
                        {error}
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
                    !(pageActual === pageMax-1) ? 
                    (
                    <>
                        <div className="border py-2 px-3 ml-1"> <button className="btn p-0" id="next" onClick={onClickPage}>{'>'}</button> </div>
                        <div className="border d-none d-md-block py-2 px-3 ml-1"> <button className="btn p-0" id="last" onClick={onClickPage}>{'Ultima'}</button> </div>
                    </>
                    )
                : null
                }
                
            </div>
        </div>
    </div>
    );
}

export default Seach;
