import React, { useEffect } from 'react';

import Advertlg from '../AD/Advertlg';
import Gif from '../Gif';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { obtenerGiphyAction, nextPageGiphyAction } from '../../actions/giphyAction';

// History

import { useHistory, useParams } from 'react-router-dom';
 
const Home = () => {
    let {id} = useParams();

    const history = useHistory();
    
    // Redux
    const dispath = useDispatch();
    
    // State Redux
    const gifs = useSelector(state => state.giphy.giphys);
    const pageActual = useSelector(state => state.giphy.pageactual);
    const pageMax = useSelector(state => state.giphy.pagemax);

    useEffect(() => {
        if(id === undefined) {
            history.push('/page=1');
        }
       // eslint-disable-next-line 
    }, []);

    useEffect(() => {
        if(!(id === undefined)) {
            dispath( nextPageGiphyAction(parseInt(id)-1) );
            dispath(obtenerGiphyAction(pageActual));
        } 
        
        // eslint-disable-next-line
    }, [id])

    const onClickPage = e => {

        let page = pageActual+1;

        switch(e.target.id) {
            case 'first': 
                history.push('/page=1')
                break;
            case 'previous':
                history.push(`/page=${page-1}`)
                break;
            case 'next':
                history.push(`/page=${page+1}`)
                break;
            case 'last':
                history.push(`/page=${pageMax}`)
                break;
            default:
                history.push(`/page=${parseInt(e.target.id) + 1}`)
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
                <Advertlg />
            </div>
        </div> 
    );
}

export default Home;