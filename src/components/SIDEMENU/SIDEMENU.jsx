import React from 'react';
import profil from '../../assets/images/John-Doe.png';
// import sidemenu from "../../data/sidemenu"

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
    }

    componentDidMount() {
        themeChange(this.state.isChecked)
        size()
    }

    render() {
        return (
            <div className="Sidemenu border-right">
                <menu className="p0" >
                    <h2>Account</h2>
                    <ul className="border-top list-style pl50">
                        <li className="relative mb35 active" >
                            <div className="m-picture" style={{backgroundImage: 'url('+profil+')'}} >
                            </div>
                            <h2><a href="http://localhost:3000/" >JD</a></h2>
                            </li>
                        <li className="mb35"><h2><a href="http://localhost:3000/" >Profile</a></h2></li>
                        <li className="mb35"><h2><a href="http://localhost:3000/" >Settings</a></h2></li>
                        <li className="mb35"><h2><a href="http://localhost:3000/" >Data</a></h2></li>
                    </ul>
                </menu>
                <div className="theme a-theme mb25">
                    <h2 className="mr20" >Dark Theme</h2>
                    <label className="switch">
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        )
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
      }

    componentDidUpdate() { themeChange(this.state.isChecked) }
}

const size = () => {
    const Login = document.querySelector('.Login')
    const Sidemenu = document.querySelector('.Sidemenu')
    let height = Login.offsetHeight
    let padding = Login.querySelector('form').offsetTop / 2
    if (height > window.innerHeight) {
        Sidemenu.style.minHeight = height + "px"
    } else {
        Sidemenu.style.minHeight = "calc(100vh - " + padding + "px )"
    }

    Sidemenu.style.paddingTop = padding + "px"
}

function themeChange(e) {
    let app = document.querySelector(".App")
    app.dataset.theme = e ? 'dark' : 'light'
}

window.addEventListener('resize', () => {
    size()
})

export default Sidemenu