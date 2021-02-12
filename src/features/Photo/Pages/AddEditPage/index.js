import Banner from 'Component/Banner/Banner'
import PhotoForm from 'features/Photo/Component/PhotoForm';
import { addPhoto,updatePhoto } from 'features/Photo/photoSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './style.scss';

function AddEditPage(){
    const {id} = useParams()
    const state = useSelector(state=>state);
    const history = useHistory()
    const dispatch = useDispatch()

    const isAddPage = id ? false:true;
    const target = state.find((item)=>item.id===+id)
    console.log(isAddPage);

    const initialValues = isAddPage ? {
        title:'',
        categoryId:null,
        photo:''
    } : target;

    function handleSubmit(value){
        return new Promise(resolve=>{
            setTimeout(()=>{
                if(isAddPage){
                    const id = Math.trunc(Math.random()*10000);
                    const newValue = {...value,id:id};
                    const action = addPhoto(newValue)
                    dispatch(action)
                }else{
                    const action = updatePhoto(value)
                    dispatch(action)
                }
                history.push('/photos')
                resolve(true);
            },2000)
        })
    }
    return(
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎"/>
            <div className="photo-edit__form">
                <PhotoForm initialValues={initialValues} handleSubmit={handleSubmit} isAddPage={isAddPage}/>
            </div>
        </div>
    )
}

export default AddEditPage;