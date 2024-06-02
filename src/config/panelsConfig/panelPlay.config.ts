export default {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['长时间', '短时间'],
        right: '5%',
        textStyle: {
            color: 'rgb(79, 106, 182)'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                lineStyle: 'rgba(255,255,255,.4)'
            }
        }
    ],
    series: [
        {
            name: '长时间',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbolSize: 7,
            data: ['26', '69', '37', '89', '51', '148', '131', '131', '72', '62', '52', '142', '12', '57', '111', '46', '16', '78', '99', '144', '45', '80', '80', '14', '86', '75', '134', '147', '48', '47'],
            lineWidth: 3,
            lineStyle: {
                color: 'rgb(54, 189, 148)'
            },
            areaStyle: {
                color: 'rgba(54, 189, 148,.2)'
            },
            itemStyle: {
                color: 'rgb(54, 189, 148)'
            }
        },
        {
            name: '短时间',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbolSize: 7,
            data: ['121', '71', '57', '44', '126', '14', '33', '96', '129', '125', '91', '43', '76', '37', '77', '139', '27', '6', '24', '45', '142', '78', '75', '50', '134', '38', '127', '110', '99', '119'],
            lineWidth: 3,
            lineStyle: {
                color: 'rgb(55, 107, 168)'
            },
            areaStyle: {
                color: 'rgba(55, 107, 168,.2)'
            },
            itemStyle: {
                color: 'rgb(55, 107, 168)'
            }
        }
    ]
};
