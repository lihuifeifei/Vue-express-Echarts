<template>
    <div>
    <div id="myChart" :style="{width: '500px', height: '400px'}"></div>
        <br>
        <button @click="getDate">查看数据</button>
    </div>
</template>

<script>

    import {option} from '../echarts/aysnc-lineChart-option.js'  //从aysnc-barChart-option.js中引入option

    export default {
        name: 'Curve',

        mounted() {
            //调用drawLineChart()
            this.drawLineChart();
        },
        data () {
            return {

            }
        },
        methods:{
//        点击发送get请求
            getDate(){
                this.$axios({
                    method: 'get',
                    url: '/getdate'
                })
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },

            drawLineChart() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制基本图表
                myChart.setOption(option);

                //显示加载动画
                myChart.showLoading();

                //获取数据
                this.$axios.get('/getdate').then(res => {

                    //将json对象的所有id数据组成一个数组
                    var id = [];
                    for(let i = 0;i < res.data.length;i++){
                        id.push(res.data[i].id);
                    }

                    //将json对象中的所有data数据组成一个数组
                    var data = [];
                    for(let i = 0;i < res.data.length;i++){
                        data.push(res.data[i].data);
                    }

                    setTimeout(()=>{  //未来让加载动画效果明显,这里加入了setTimeout,实现300ms延时
                        myChart.hideLoading(); //隐藏加载动画
                        myChart.setOption({
                            xAxis: {
                                data: id
                            },
                            series: [{
                                 data: data
                            }]
                        })
                    }, 300 )
                })
            },
        },

    };


</script>

<style scoped lang="scss">

    button {
        display: block;
        margin: auto;
        outline:none;
        height: 40px;
        text-align: center;
        width: 130px;
        border-radius:40px;
        background: #fff;
        border: 2px solid #1ECD97;
        color: #1ECD97;
        letter-spacing:1px;
        text-shadow:0;
    font:{
        size:20px;
        weight:bold;
    }
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
         color:white;
         background: #1ECD97;
     }
    &:active {
     //letter-spacing: 2px;
         letter-spacing: 2px ;
     }
    }

#myChart{
    display: block;
    margin: auto;
}
</style>
