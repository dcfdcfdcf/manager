import React, { Component } from 'react';
import userInfo from '../../userInfo/userInfo.js'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="page-header">
                <h1 className="header">后台信息系统 <small>欢迎您：{this.props.user}</small>
                <button className="btn btn-default addBtn">新增</button>
                </h1>
            </div>
        )
    }
    
}

export default Header;