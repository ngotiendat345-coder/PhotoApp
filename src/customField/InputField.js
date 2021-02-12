import React from 'react'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types'

InputField.prototype ={
    field:PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    type:PropTypes.string,
    disabled:PropTypes.bool,
    placeholder:PropTypes.string,
    label:PropTypes.string
}
InputField.defaultProps={
    type:'text',
    label:'',
    placeholder:'',
    disabled:false,
}
function InputField(props){
    const {
        field,form,
        label,placeholder,type,disabled
    }= props;
    const {onChange, onBlur, name, value} = field
    const {errors,touched}=form;
    const showError = errors[name] && touched[name] ? true :false;

    console.log(props)
    return(
        <FormGroup>
            <Label for={name}>
                {label}
            </Label>
            <Input id={name} value={value} type={type} disabled={disabled} onChange={onChange} onBlur={onBlur} placeholder={placeholder} invalid={showError}/>
            {showError && <FormFeedback>{errors[name]}</FormFeedback>}
        </FormGroup>
    )
}

export default InputField;