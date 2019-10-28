import React, { Component } from 'react';
import './Home.css';
import SideBar from '../sideBar/SideBar.js';
import Header from '../Header/Header.js';
import Content from '../List/List.jsx';
import Detail from '../Detail/Detail.js';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Header user={this.props.user} />
                    </div>
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

export default Home;