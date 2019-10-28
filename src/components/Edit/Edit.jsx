import React, { Component } from 'react';
import PopWin from '../PopWin/PopWin.jsx'
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
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

export default PopWin(Edit);