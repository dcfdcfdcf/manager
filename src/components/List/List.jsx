import React, { Component } from 'react';
import axios from "axios";
import PopWin from '../PopWin/PopWin';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            com: null,
            curEdit: ''
        };
    }


    /***
     * 点击新增按钮后请求后台添加数据并更新页面数据
     */
    componentWillReceiveProps(nextProps) {
        console.log(88888, nextProps)
        if (this.props.isAdd !== nextProps.isAdd && nextProps.isAdd) {
            axios.get(
                'http://localhost:3000/mock/mock.json',

                {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    alert('添加数据成功')//加请求数据成功
                    this.setState({
                        data: res.data.userInfos
                    })
                });
        }
    }

    componentDidMount() {
        axios.get(
            'http://localhost:3000/mock/mock.json',
            {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                alert('求数据成功')//加请求数据成功
                this.setState({
                    data: res.data.userInfos
                })
            });
    }

    /**
     * 删除数据处理
     */

    delete = (index) => {
        axios.get(
            'http://localhost:3000/mock/mock.json',
            {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            res => {
                //加后台删除数据成功
                this.state.data.splice(index, 1);
                this.setState({
                    data: this.state.data
                })
            }
        )

    }

    /***
     * 弹出编辑页面
     */
    editBtnHandle = (value) => {
        import('../Edit/Edit.jsx').then(com => {
            console.log(com)
            this.setState({
                com: PopWin(com.default, '密码修改', '取消', '保存'),
                curEdit: value
            });
        })
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

    saveData = (newInfos) => {
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
                //判断请求后台修改数据成功
                let index = this.state.data.indexOf(newInfos.user);
                this.state.data.splice(index - 1, 1, { ...newInfos });
                this.setState({
                    //data: res.data.userInfos
                    data: this.state.data
                })
                alert('修改数据成功')//加请求数据成功

            });
    }

    render() {
        return (
            <div>
                {
                    this.state.com
                        ? <this.state.com
                            closeModal={this.closeModal}
                            value={this.state.curEdit}
                            saveData={this.saveData}
                            saveBtnClick
                        />
                        : null
                }
                <table className="table table-bordered" >
                    <thead>
                        <tr>
                            <th>用户名</th>
                            <th>密码</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.user}</td>
                                        <td>{value.password}</td>
                                        <td>
                                            <a onClick={() => this.delete(index)}>删除</a>
                                            &nbsp;&nbsp;
                                        <a onClick={() => this.editBtnHandle(value)}>编辑</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default List;