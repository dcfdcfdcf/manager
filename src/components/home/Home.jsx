import React, { Component } from 'react';
import './Home.css';
import SideBar from '../sideBar/SideBar.js';
import Header from '../Header/Header.js';
import Content from '../Content/Content.jsx';
import Detail from '../Detail/Detail.js';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <div width="100%">
                <Header user={this.props.user} />
                <div className="row">
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9 content">
                        <Router>
                            <Route exact={false} path="/home/detail" exact component={Detail}></Route>
                            <Route exact={false} path="/home" exact component={Content} ></Route>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;