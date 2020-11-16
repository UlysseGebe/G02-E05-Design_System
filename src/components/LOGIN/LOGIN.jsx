import React from 'react';
// import login from "../../data/login"

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <form action="" className="mb25">
                <h1 className="start mb25">Profile</h1>
                <div className="mb25">
                    <input type="email" placeholder="Saisissez votre adresse e-mail" />
                    <label className="mb5" htmlFor="email" >E-mail</label>
                </div>
                <div className="mb35" >
                    <input type="name" placeholder="John Doe" />
                    <label className="mb5" htmlFor="name" >Fullname</label>
                </div>
                <input type="button" value="save" className="uppercase" />
                </form>
                <div className="delete border-top">
                    <h2>Delete my account</h2>
                    <p>To delete your account entirely, please click here. </p>
                    <button className="uppercase" >Delete</button>
                </div>
            </div>
        )
    }
}

export default Login