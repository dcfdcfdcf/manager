import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="list-group">
                <Link to={`/home`}><button type="button" className="list-group-item">用户列表</button></Link>
                <Link to={`/home/detail`}><button type="button" className="list-group-item">用户详情</button></Link>
            </div>
        );
    }
}

export default SideBar;