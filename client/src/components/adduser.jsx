import React, {useState, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddUser() {
    const [formSend, setFormSend] = useState(false);
return (
<div>
<Formik
initialValues={{
            name: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: '',
            dni: '',
            rol: '',
            file: '',
            image: ''
}}
validate={(val)=>{
    let errors = {};
    if(!val.name) errors.name = "Por favor ingresa un nombre"
    else if(!/^[a-zA-Z ]*$/.test(val.name)) errors.name = "Solo se aceptan letras y espacios"

    if(!val.lastName) errors.lastName = "Por favor ingresa un apellido"
    else if(!/^[a-zA-Z ]*$/.test(val.lastName)) errors.lastName = "Solo se aceptan letras y espacios"

    return errors;
}}
onSubmit ={(val, {resetForm})=>{
    resetForm();
    setFormSend(true);
    setTimeout(()=>setFormSend(false),5000)
}}
>
{( {errors} ) =>{
    <Form>
        <div>
            <label htmlFor="name">Nombre</label>
            <Field
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"/>
            <ErrorMessage name="name" component={()=>(<small>{errors.name}</small>)}/>
        </div>
        <div>
            <label htmlFor="lastName">Apellido</label>
            <Field
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Apellido"/>
            <ErrorMessage name="lastName" component={()=>(<small>{errors.lastName}</small>)}/>
        </div>
        <button type="submit">Agregar</button>
        {formSend && (<small>Usuario creado con exito</small>)}
    </Form>
}}
</Formik>
</div>
)
}