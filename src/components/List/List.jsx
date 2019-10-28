import React, { Component } from 'react';
import axios from "axios";
import PopWins from '../Edit/Edit.jsx';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            com: null
        };
    }

    componentDidMount() {
        axios.get(
            'http://localhost:3000/mock/mock.json',
            {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                alert(JSON.stringify(res))
                this.setState({
                    data: res.data.userInfos
                })
            });
    }

    delete = (index) => {
        this.state.data.splice(index, 1);
        this.setState({
            data: this.state.data
        })
    }

    edit = (index) => {
        import('../Edit/Edit.jsx').then(com => {
            console.log(com)
            this.setState({
                com: com.default
            });
        })
    }

    render() {
        console.log(<this.state.com/>);
        console.log(<PopWins/>)
        return (
            <div>
                {this.state.com? <this.state.com/> : null}
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
                                        <a onClick={() => this.edit(index)}>编辑</a>
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