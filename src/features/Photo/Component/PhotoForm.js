import React from 'react'
import { FastField, Form, Formik } from 'formik';
import InputField from 'customField/InputField';
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import SelectField from 'customField/SelectField';
import RandomField from 'customField/RandomField';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from "yup";
import Prototype from 'prop-types'

PhotoForm.prototype={
    handleSubmit:Prototype.func
}
PhotoForm.defaultProps={
    handleSubmit:null
}
function PhotoForm(props){
    const isAddPage = props.isAddPage;
    const schema = Yup.object().shape({
        title:Yup.string().required('This field is required'),
        categoryId:Yup.number().required('This field is required').nullable(),
        photo:Yup.string().required('This field is required')
    })
    return(
        <Formik initialValues={props.initialValues}
                onSubmit={props.handleSubmit}
                validationSchema={schema}
        >
            {(props)=>{
               const { values, errors, touched,isSubmitting } = props;
               console.log({ values, errors, touched });
               return(
                   <Form>
                       <FastField name="title" component={InputField}
                                    label="Title" placeholder="Eg:Wow Nature"
                       />
                       <FastField name="categoryId" component={SelectField}
                                    label="Category" placeholder="What is your photo category"
                                    options={PHOTO_CATEGORY_OPTIONS}
                       />
                       <FastField name="photo" component={RandomField}
                                    label="Photo"
                       />
                       <FormGroup>
                           <Button  color="success" type="submit">
                               {isSubmitting&&<Spinner size="sm"/>}
                                    {isAddPage ?"Add to album" :"Update your photo"}
                           </Button>
                       </FormGroup>
                   </Form>
               )
            }}
        </Formik>
    )
}

export default PhotoForm