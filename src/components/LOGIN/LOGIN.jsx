import React from 'react';
import login from "../../data/login"

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <form action="" className="mb25">
                    <h1 className="start mb25">{login.title}</h1>
                    {login.form.map((field, index) =>
                        <div className={field.class} key={index}>
                            <input type={field.type} placeholder={field.holder} />
                            <label className="mb5" htmlFor={field.type} >{field.label}</label>
                        </div>
                    )}
                    <input type="button" value={login.formSave} className="uppercase" />
                </form>
                <div className="delete border-top mb25">
                    <h2>{login.delete.title}</h2>
                    <p>{login.delete.text}</p>
                    <button className="uppercase" >{login.delete.btn}</button>
                </div>
            </div>
        )
    }
}

export default Login