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
    }

    render() {
        return (
            <div className="Sidemenu">
                <menu className="u-padding:0" >
                    <h2 className="u-subtitle" >{sidemenu.title}</h2>
                    <ul className="border-top u-list u-padding-left:50 u-padding-top:25">
                        {sidemenu.menu.map((list, index) =>{
                            return typeof list == "object" ?
                                <li className="u-relative u-margin-bottom:35 u-subtitle" key={index} >
                                    <div className="m-picture" style={{backgroundImage: 'url('+list.img+')'}} >
                                    </div>
                                    <a href="http://localhost:3000/" className="active" >{list.name}</a>
                                </li>
                            :
                                <li className="u-margin-bottom:35 u-subtitle" key={index}><a href="http://localhost:3000/">{list}</a></li>
                        })}
                    </ul>
                </menu>
                <div className="theme a-theme u-margin-bottom:25">
                    <h2 className="u-margin-right:20 u-subtitle" >{sidemenu.themeTitle}</h2>
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

export default Sidemenu