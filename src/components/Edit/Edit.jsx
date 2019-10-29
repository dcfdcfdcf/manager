import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.value ? this.props.value.user : '',
            password: this.props.value ? this.props.value.password : ''
        };
    }

    passwordinput = e => {
        this.setState({
            password: e.target.value
        })
    }

    userinput = (e) => {
        this.setState({
          user: e.target.value
        })
      }

    componentWillUnmount() {
        console.log('111111111111111111111111', this.props.saveBtnClick);
        this.props.saveBtnClick && this.props.saveData({ ...this.state });//传数据到popWin
    }

    render() {
        console.log(3333,this.props.value)
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-md-12">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入用户名"
                            value={this.state.user}
                            onChange={this.userinput}
                            disabled={this.props.value}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-12">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="请输入密码"
                            onChange={this.passwordinput}
                            value={this.state.password}
                        />
                    </div>
                </div>
            </form>

        );
    }
}


export default Edit;