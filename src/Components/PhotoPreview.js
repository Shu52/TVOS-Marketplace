import React from 'react'

const PhotoPreview = (props) => {
    return (
        <img id={props.id} onClick={e =>{
            console.log(e.target)
            e.target.remove()
            }}
            src={props.url} alt="post photos" style={{ height: 300, width: "auto" }}/>
    )
}

export default PhotoPreview