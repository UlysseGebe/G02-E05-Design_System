import React from 'react';
import sidemenu from "../../data/sidemenu"

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
    }

    componentDidMount() {
        this.setState({
            isChecked: getCookie('dark') === "true" ? true : false,
        });
        setCookie('dark', this.state.isChecked)
        themeChange(this.state.isChecked)
        size()
    }

    render() {
        return (
            <div className="Sidemenu border-right">
                <menu className="p0" >
                    <h2>{sidemenu.title}</h2>
                    <ul className="border-top list-style pl50">
                        {sidemenu.menu.map((list, index) =>{
                            return typeof list == "object" ?
                                <li className="relative mb35 active" key={index} >
                                    <div className="m-picture" style={{backgroundImage: 'url('+list.img+')'}} >
                                    </div>
                                    <h2><a href="http://localhost:3000/" >{list.name}</a></h2>
                                </li>
                            :
                            <li className="mb35" key={index}><h2><a href="http://localhost:3000/">{list}</a></h2></li>
                        })}
                    </ul>
                </menu>
                <div className="theme a-theme mb25">
                    <h2 className="mr20" >{sidemenu.themeTitle}</h2>
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

    componentDidUpdate() {
        setCookie('dark', this.state.isChecked)
        themeChange(this.state.isChecked)
    }
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

function setCookie(c_name, value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate());
    var c_value = escape(value);
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x === c_name) {
            return unescape(y);
        }
    }
}

window.addEventListener('resize', () => {
    size()
})

export default Sidemenu