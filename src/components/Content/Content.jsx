import React, { Component } from 'react';
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>用户名</th>
                        <th>密码</th>
                        <th colSpan="2">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.data.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.user}</td>
                                    <td>{value.password}</td>
                                    <td><a href="javascript(void(0));"></a>删除</td>
                                    <td><a href="javascript(void(0));"></a>编辑</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default Content;