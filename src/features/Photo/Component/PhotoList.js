import React from 'react'
import { Row } from 'reactstrap';
import PhotoCard from './PhotoCard'
import Prototype from 'prop-types'
PhotoList.prototype={
    list:Prototype.array,
    handleRemove:Prototype.func,
    handleRemove:Prototype.func
}
PhotoList.defaultProps={
    list:[],
    handleRemove:null,
    handleEdit:null
}
function PhotoList({list,handleRemove,handleEdit}){
    return(
        <Row>
            {list.map((item,index)=>{
                
                return (
                    <div className="col-12 col-md-6 col-lg-3" key={index}>
                        <PhotoCard item={item} handleEdit={handleEdit} handleRemove={handleRemove}/>
                    </div>
                )
            })}
        </Row>
    )
}

export default PhotoList;