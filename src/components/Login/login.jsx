import React from "react";
import {Redirect} from 'react-router-dom'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import {login, logout} from "../../redux/auth-reducer" 
import { connect } from "react-redux";
import style from "../common/FormsControls/FormsControls.module.css"

const maxLength20 = maxLengthCreator (20);
const LoginForm = ({handleSubmit, error}) =>{
    return(
    <form onSubmit={handleSubmit}>
        {createField("Email", "email", [requiredField, maxLength20], Input)}
        {createField("Password", "password", [requiredField, maxLength20], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember Me")}
        
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
    )
}
const LoginReduxForm = reduxForm ({
    form: 'login' //Уникальное строковое имя формы (не связано с form в redux-store)
})(LoginForm) //форма вокруг которой нужно создать редакс форму

const Login = (props) =>{
    
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe) //Передать колбек в санкриейтор
    }
    
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
         </div> 
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout})(Login); //Коннект создаст колбек с таким же именемм login