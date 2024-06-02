export default {
    grid: {
        top: 0,
        left: 10,
        right: 10,
        bottom: 0,
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [
        {
            type: 'category',
            data: ['Html5', 'CSS3', 'javascript', 'Vue', 'Node'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: 'white'
            }
        },
        {
            type: 'category',
            data: [702, 350, 610, 793, 664],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: 'white'
            }
        }
    ],
    series: [
        {
            type: 'bar',
            yAxisIndex: 0,
            data: [70, 34, 60, 78, 69],
            barWidth: 10,
            barCategoryGap: 5,
            label: {
                show: true,
                formatter: '{c}%',
                position: 'inside',
                color: 'white'
            },
            itemStyle: {
                color: (params: { 'dataIndex': number }) => {
                    let colors = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
                    return colors[params.dataIndex]
                },
                borderRadius: 4
            }
        },
        {
            type: 'bar',
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            barWidth: 15,
            barCategoryGap: 5,
            itemStyle: {
                color: 'none',
                borderWidth: 3,
                borderColor: '#44b9dd',
                borderRadius: 5
            },

        }
    ]
};