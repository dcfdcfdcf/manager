import React, { Component } from 'react';
import './Home.css';
import SideBar from '../SideBar/SideBar';
import Header from '../Header/Header';
import List from '../List/List';
import Detail from '../Detail/Detail';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd: false
        };
    }

    isAdd = (isAdd) => {
        this.setState({
            isAdd: isAdd
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className="col-md-12">
                        <Header user={this.props.user} isAdd={this.isAdd} />
                    </div>
                    <div className="col-md-3">
                        <SideBar />
                    </div>
                    <div className="col-md-9 content">
                        <Router>
                            <Route exact={false} path="/home/detail" exact component={Detail}></Route>
                            <Route exact={false} path="/home" exact render={
                                () => { return <List isAdd={this.state.isAdd} /> }
                            } ></Route>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;