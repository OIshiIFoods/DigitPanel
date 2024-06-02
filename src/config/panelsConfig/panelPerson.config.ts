export default {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['新增粉丝', '新增游客'],
        textStyle: {
            color: 'rgb(79, 106, 182)'
        },
        right: 0
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.4)'
            }
        },
        axisLabel: {
            color: 'rgba(255,255,255,.4)'
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,0,0,.4)'
            }
        },
        axisLabel: {
            color: 'rgba(255,255,255,.4)'
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '新增粉丝',
            type: 'line',
            smooth: true,
            itemStyle: {
                color: 'rgb(174, 82, 102)'
            },
            lineStyle: {
                color: 'rgb(174, 82, 102)'
            },
            data: [187, 331, 189, 60, 254, 101, 104, 7, 300, 291, 166, 144]
        },
        {
            name: '新增游客',
            type: 'line',
            smooth: true,
            itemStyle: {
                color: 'rgb(81, 195, 210)'
            },
            lineStyle: {
                color: 'rgb(81, 195, 210)'
            },
            data: [315, 134, 67, 323, 180, 233, 92, 296, 100, 13, 225, 283]
        }
    ]
};