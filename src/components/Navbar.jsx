import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <Menu right isOpen={false}  className={"menu"}>
                    <Link to="/">Home</Link>
                </Menu>
            </div>
        )
    }
}

export default Navbar