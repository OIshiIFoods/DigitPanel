export default {
    grid: {
        bottom: '0%',
        left: '5%',
        right: '5%',
        top: '0%'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        top: "0%",
        itemWidth: 7,
        itemHeight: 7,
        textStyle: {
            color: 'rgba(255,255,255,.4)'
        },
        data: [
            '上海',
            '北京',
            '天津',
            '山东',
            '深圳',
            '浙江',
            '山西',
            '陕西'
        ]
    },
    series: [
        {
            name: '地区分布',
            type: 'pie',
            radius: ["10%", "60%"],
            center: ['50%', '60%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            color: ['#538fff', '#4756ff', '#6fc8a6', '#ed878f', '#ed878e', '#fe9d89', '#4d85ff', '#5abdee'],
            label: {
                color: "rgba(255,255,255,.4)"
            },
            data: [
                { value: 30, name: '上海' },
                { value: 28, name: '北京' },
                { value: 26, name: '天津' },
                { value: 24, name: '山东' },
                { value: 22, name: '深圳' },
                { value: 20, name: '浙江' },
                { value: 18, name: '山西' },
                { value: 16, name: '陕西' }
            ]
        }
    ]
};