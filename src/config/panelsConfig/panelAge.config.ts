export default {
    grid: {
        bottom: '0%',
        left: '5%',
        right: '5%',
        top: '2%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{b}：{c}({d}%)',
        backgroundColor: 'rgba(0,0,0,.5)',
        textStyle: {
            color: 'white'
        }
    },
    legend: {
        top: '0%',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: 'rgba(255,255,255,.4)'
        }
    },
    series: [
        {
            name: '年龄分布',
            type: 'pie',
            selectedOffset: 100,
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            center: ['50%', '50%'],
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: [
                { value: 1048, name: '0-20岁' },
                { value: 735, name: '20-29岁' },
                { value: 580, name: '30-39岁' },
                { value: 484, name: '40-49岁' },
                { value: 300, name: '50岁以上' }
            ]
        }
    ]
};