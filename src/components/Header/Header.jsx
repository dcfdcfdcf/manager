import React, { Component } from 'react';
import axios from 'axios'
import userInfo from '../../UserInfo/UserInfo.jsx';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state = {
            com: null
        }
    }

    /***
     * 关闭弹框
     */
    closeModal = (isDisplay) => {
        console.log(222, isDisplay)
        this.setState({
            com: !isDisplay && null
        });
    }

    /***
     * 请求后台增加数据并通知列表页更新数据
     */
    saveData = (newInfos) => {
        let _this = this;
        console.log(77777, newInfos);
        axios.get(
            'http://localhost:3000/mock/mock.json',
            {
                ...newInfos
            },
            {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                _this.props.isAdd(1,2);
            });
    }

    addBtnHandle = () => {
        import('../Edit/Edit.jsx').then(com => {
            console.log(com)
            this.setState({
                com: com.default,
            });
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.com
                        ? <this.state.com
                            closeModal={this.closeModal}
                            saveData={this.saveData}
                        />
                        : null
                }
                <div className="page-header">
                    <h1 className="header">后台信息系统 <small>欢迎您：{this.props.user}</small>
                        <button
                            className="btn btn-default addBtn"
                            onClick={this.addBtnHandle}
                        >新增
                </button>
                    </h1>
                </div>
            </div>

        )
    }

}

export default Header;