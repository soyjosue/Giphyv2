import React from 'react';

const Gif = ({gif}) => {

    const onClickModal = () => {

    }

    return(
        <div className="col-12 col-md-6 col-lg-4 mt-4">
            <img 
                src={gif.images.downsized_medium.url} 
                alt={gif.title} 
                className="img-fluid img-thumbnail rounder giphys-style"
                onClick={onClickModal}
            />
        </div>
    );
}

export default Gif;