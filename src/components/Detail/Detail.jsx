
import ReactEcharts from 'echarts-for-react';
import React, { Component } from 'react';
import axios from 'axios'


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
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
                //加请求数据成功
                this.setState({
                    data: res.data.userCounts
                })
            });
    }

    getOption = () => {
        return (
            {
                backgroundColor: '#2c343c',
                title: {
                    text: '用户登陆次数统计',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#ccc'
                    }
                },

                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: this.state.data.map((value,index,item) => {
                            return {
                                value: value.count,
                                name: value.user
                            }
                        }).sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },

                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            }

        )
    }


    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                notMerge={true}
                lazyUpdate={true}
                style={{ width: '80%', height: '80%' }}
            />
        );
    }
}

export default Detail;