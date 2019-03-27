/**
 * Created by ant on 2019/3/22.
 */
// 指定图表的配置项和数据
export const option = {
    title: { text: '曲线图' },
    backgroundColor: '#FBFBFB',
    tooltip: {
        trigger:'axis'
    },
    xAxis: {
        data: [],
        name: 'time'
    },
    yAxis: {name: 'data'},
    
    dataZoom: [
        {
            type: 'slider',    //支持鼠标滚轮缩放
            start: 0,            //默认数据初始缩放范围为10%到90%
            end: 100
        },
        {
            type: 'inside',    //支持单独的滑动条缩放
            start: 0,            //默认数据初始缩放范围为10%到90%
            end: 100
        }
    ],
    toolbox: {    //工具栏显示
        show: true,
        feature: {
            saveAsImage: {}        //显示“另存为图片”工具
        }
    },
    series: [{
        name: 'data',
        type: 'line',
        data: [],
        smooth : true,
        itemStyle: {
            normal: {
                color: 'hotpink'
            }
        }
    }]
}