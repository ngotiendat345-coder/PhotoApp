import React from 'react'
import { Button } from 'reactstrap'
import './style.scss'
import Proptype from 'prop-types'

RandomPhoto.prototype={
    handleImageSrc:Proptype.func,
    name:Proptype.string,
    value:Proptype.string,
}
RandomPhoto.defaultProps={
    value:'',
    handleImageSrc:null
}
function RandomPhoto(props){
    const {name,handleImageSrc,value}=props;
    function getImageURL(){
        const id = Math.trunc(Math.random()*2000)
        return `https://picsum.photos/id/${id}/300/300`
    }
    async function getImage(){
        const url=await getImageURL()
        handleImageSrc(url)
    }
    return(
        <div className="random-photo">
            <div className="random-photo__button">
            <Button outline color="primary" className={name} onClick={getImage}>
                Random a photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {value && <img src={value} alt="Ooops ... not found. Please click random again!" onError={getImage}/>}
            </div>
            
        </div>
    )
}

export default RandomPhoto;