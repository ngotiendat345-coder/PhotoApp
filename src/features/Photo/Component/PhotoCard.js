import { Button } from 'reactstrap';
import React from 'react'
import './PhotoCard.scss'
import Prototype from 'prop-types'
PhotoCard.prototype={
    item:Prototype.object,
    handleRemove:Prototype.func,
    handleRemove:Prototype.func
}
PhotoCard.defaultProps={
    item:{},
    handleRemove:null,
    handleEdit:null
}
function PhotoCard({handleRemove,item,handleEdit}){
    const {id,photo,title}= item;
    return(
        <div className="photo">
            <img src={photo} alt={title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{title}</h3>
                <div className="photo__actions"><div>
                    <Button outline color="light" className="btn-sm" onClick={()=>{
                        handleEdit(id)
                    }}>Edit</Button>
                </div>
                <div>
                <Button outline color="danger" className="btn-sm" onClick={()=>{
                    handleRemove(id)
                }}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PhotoCard;