import RandomPhoto from 'Component/RandomPhoto';
import React from 'react'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Prototype from 'prop-types';
import { ErrorMessage } from 'formik';

RandomField.prototype = {
    form:Prototype.object.isRequired,
    field:Prototype.object.isRequired,
    label:Prototype.string.isRequired
}
RandomField.defaultProps ={
    label:''
}
function RandomField(props){
    const {form,field,
        label,
    } = props;
    const {name,value} = field;
    const {errors,touched} = form;
    const showError = errors[name] && touched[name] ? true :false;

    function handleImageSrc(imgUrl){
        form.setFieldValue(name,imgUrl);
    }
    
    return(
        <FormGroup>
            <Label for={name}>
                {label}
            </Label>
            <RandomPhoto value={value} handleImageSrc={handleImageSrc} name={name}/>
            <div className={showError ? "is-invalid":""}></div>
            <ErrorMessage component={FormFeedback} name={name}/>
        </FormGroup>
    )
}

export default RandomField;