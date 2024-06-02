export default {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['语文', '数学', '英语', '政治', '历史', '化学'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,.4)'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,.6)'
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,.6)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,.4)'
            }
        },
        axisTick: {
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,.4)',
            }
        }
    },
    tooltip: {
        // 触发条件
        triggerOn: 'onmousemove',
        // 触发的样式类型
        trigger: 'axis',
        // 自定义触发文本
        formatter: '{b} {c}',
        backgroundColor: 'rgba(50,50,50,0.7)',
        textStyle: {
            color: 'white'
        }
    },
    series: [
        {
            data: [120, 141, 150, 80, 70, 92],
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
                borderRadius: 4,
                color: 'rgb(47, 137, 207)'
            },
            markLine: {
                data: [
                    {
                        type: "average",
                        lineStyle: {
                            color: 'red',
                            width: 5,
                            type: 'solid'
                        }
                    }
                ]
            },
            markPoint: {
                data: [
                    {
                        type: 'max',
                        itemStyle: {
                            color: "red",
                        },
                        label: {
                            color: 'white'
                        }
                    },
                    {
                        type: 'min',
                        itemStyle: {
                            color: "red",
                        },
                        label: {
                            color: 'white'
                        }
                    }
                ]
            }
        }
    ],

};

