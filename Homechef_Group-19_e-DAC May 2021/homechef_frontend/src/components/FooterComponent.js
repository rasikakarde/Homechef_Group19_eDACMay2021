import React, { Component } from 'react';
import './Menu.css';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                {/* <footer className = "footer">
                    <span className="text-muted"></span>
                </footer> */}
                <footer className="footer">
                    <p>Copyright &copy; <a href="./Home.js">HomeChef</a>, All Right Reserved.</p>
                    <p>Designed By <a href="http://www.infowayltd.com/">Infoway EDAC Students</a></p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent