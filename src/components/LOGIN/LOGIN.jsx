import React from 'react';
// import login from "../../data/login"

class Login extends React.Component {
    render() {
        return (
            <div className="Login">
                <form action="">
                <h1>Profile</h1>
                <div>
                    <label for="email" htmlFor="email">E-mail</label>
                    <input type="email"/>
                </div>
                <div>
                    <label for="name" htmlFor="name">Fullname</label>
                    <input type="name"/>
                </div>
                <input type="button" value="save"/>
                </form>
                <div className="delete">
                    <h2>Delete my account</h2>
                    <p>To delete your account entirely, please click here. </p>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}

export default Login