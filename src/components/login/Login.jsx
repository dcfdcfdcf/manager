import React, { Component } from 'react';
import './login.css';
import axios from "axios"
import userInfo from '../../userInfo/userInfo.js';
import { Link } from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      loginUrl: '/'
    };
  }

  userinput = (e) => {
    this.setState({
      user: e.target.value
    })
  }

  passwordinput = e => {
    this.setState({
      password: e.target.value
    })
  }

  login = () => {
    if (this.state.user === '' || this.state.password === '') {
      alert("nishuruxinxibuwanzheng")
      return
    }

    axios.get(
      'http://localhost:3000/mock/mock.json',
      { ...this.state },
      {
        'headers': {
          'Content-Type': 'application/json'
        },
      }).then(
        res =>{
          if (res.data.loginStatus === 'success' && res.status === 200) {
            window.location.href = window.location.href + 'home'
              this.props.submit(this.state.user);


          } else {
            this.setState({
              loginUrl: '/login'
            })
          }
        }
      ).catch(
        error => {
          this.props.submit(this.state.user)
        }
      )
    // this.props.submit(this.state);

  }

  render() {
    const warnName = this.state.warn ? 'visible' : 'hidden';
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">欢迎来到后台管理系统</div>
              <div className="panel-body">
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
                  <div className={`alert alert-danger ${warnName}`} role="alert">你输入的账户用户名不完整</div>
                  <div className="form-group">
                    <div className="col-md-offset-4 col-md-12">
                      <Link to={this.state.loginUrl}>
                        <button
                          className="btn btn-primary"
                          onClick={this.login}>
                          登录
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>



    );
  }
}

export default Login;                