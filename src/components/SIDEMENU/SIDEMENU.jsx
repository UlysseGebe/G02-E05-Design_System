import React from 'react';
// import sidemenu from "../../data/sidemenu"

class Sidemenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked: false,
        };
    }

    componentDidMount() { themeChange(this.state.isChecked) }

    render() {
        return (
            <div className="Sidemenu">
                <menu>
                    <h2>Account</h2>
                    <nav>
                        <h2><a >JD</a></h2>
                        <h2><a >Profile</a></h2>
                        <h2><a >Settings</a></h2>
                        <h2><a >Data</a></h2>
                    </nav>
                </menu>
                <div className="theme">
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

function themeChange(e) {
    let app = document.querySelector(".App")
    app.dataset.theme = e ? 'dark' : 'light'
}

export default Sidemenu