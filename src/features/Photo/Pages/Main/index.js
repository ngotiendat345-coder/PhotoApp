import Banner from 'Component/Banner/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/Component/PhotoList';
import { deletePhoto } from 'features/Photo/photoSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
//import Banner from './Component/Banner/Banner';

function Main(){
    const state = useSelector(state=>state)
    const history = useHistory();
    const dispatch = useDispatch()

    function handleRemove(id){
        const action = deletePhoto(id);
        dispatch(action)
    } 
    function handleEdit(id){
        const url = `/photos/${id}`
        history.push(url)
    }
    return(
        <>
            <Banner title="🎉 🎉 Your awesome photos 🎉 🎉" background={Images.PINK_BG} />
            <Container>
                <div className="text-center py-5"><Link to="/photos/add">Add new photo</Link></div>
                <PhotoList list={state} handleRemove={handleRemove} handleEdit={handleEdit}/>
            </Container>
        </>
    ) 
}

export default Main;