import React, { Component } from 'react';
import userInfo from '../../userInfo/userInfo.js'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        alert(JSON.stringify(this.props.user))
        return (
            <div className="page-header">
                <h1>后台信息系统 <small>欢迎您：{this.props.user}</small></h1>
            </div>
        )
    }
    
}

export default Header;