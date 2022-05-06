import React from "react"
import styles from "./FormsControls.module.css"
import { Field } from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) =>{ //деструктуризировать из пропс инпут и мета, и остаток пропс
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{ //деструктуризировать из пропс инпут и мета, и остаток пропс
    const hasError = meta.touched && meta.error;
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} 
        name={name} validate={validators} component={component} {...props}/> {text}
    </div>)
