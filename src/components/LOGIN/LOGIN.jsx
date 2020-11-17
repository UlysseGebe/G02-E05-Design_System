import React from 'react';
import login from "../../data/login"

class Login extends React.Component {
    render() {
        return (
            <div className="Login border-left">
                <form action="" className="u-margin-bottom:25">
                    <h1 className="start u-margin-bottom:25 u-title">{login.title}</h1>
                    {login.form.map((field, index) =>
                        <div className={field.class} key={index}>
                            <input type={field.type} placeholder={field.holder} />
                            <label className="u-margin-bottom:5" htmlFor={field.type} >{field.label}</label>
                        </div>
                    )}
                    <input type="button" value={login.formSave} className="u-uppercase" />
                </form>
                <div className="delete border-top u-margin-bottom:25">
                    <h2>{login.delete.title}</h2>
                    <p>{login.delete.text}</p>
                    <button className="u-uppercase" >{login.delete.btn}</button>
                </div>
            </div>
        )
    }
}

export default Login