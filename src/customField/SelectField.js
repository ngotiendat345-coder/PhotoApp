import React from 'react'
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types'
SelectField.prototype = {
    form:PropTypes.object.isRequired,
    field:PropTypes.object.isRequired,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
    options:PropTypes.array
}
SelectField.defaultProps={
    placeholder:'',
    disabled:false,
    options:[],
    label:''
}
function SelectField(props){
    const {
        form,field,
        placeholder,label,options
    }=props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value);
    const {errors,touched} = form;
    const showErrors = errors[name] && touched[name] ? true:false;
    console.log(selectedOption)
    function handleOnChange(selectedOption){
        const selectIndex = selectedOption ? selectedOption.value : selectedOption;
        const tempEvent = {
            target:{
                value:selectIndex,
                name:name
            }
        }
        field.onChange(tempEvent)
    }
    return(
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Select
                id={name}
                placeholder={placeholder}
                value={selectedOption}
                
                options={options}
                onChange={handleOnChange}
                className={showErrors?"is-invalid":""}
            >
            </Select>
            {showErrors && <FormFeedback>{errors[name]}</FormFeedback>}
        </FormGroup>
    )
}  

export default SelectField;