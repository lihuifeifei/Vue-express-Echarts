<template>
    <div>
        <button @click="drawLineChart">曲线图</button>
        <br>
        <br>
        <div id="myChart" :style="{width: '550px', height: '450px'}"></div>
    </div>
</template>

<script>

    import { option } from '../echarts/aysnc-lineChart-option.js'  //从aysnc-lineChart-option.js中引入option

    export default {
        name : 'Curve',
        data () {
            return {}
        },
        methods : {

            //判断数据是否为数组
            isArray(arr){
                return arr instanceof Array;
            },

            //判断数组中的json对象中是否含有time和data数据

            isItemTrue(obj){
                if(obj.hasOwnProperty("time") && obj.hasOwnProperty("data")){
                    return true;
                }else {
                    return false;
                }
            },
            isTureArray(arr1){
                for(var i = 0 ; i < arr1.length ; i++){
                  if(!this.isItemTrue(arr1[i]))
                      return false;

                }
                return true;
            },

            //点击按钮
            drawLineChart() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制基本图表
                myChart.setOption(option);

                //显示加载动画
                myChart.showLoading();

                //获取数据
                this.$axios.get('/getdate')
                    .then(res => {

                        console.table(res.data);


                       //验证获取的数据是否满足要求
                        if( this.isArray(res.data) == false){
                         alert('获取数据出错,数据不是数组形式');
                        return;
                        }

                        if (this.isTureArray(res.data) == false){
                            alert('获取数据出错,数据不含time或者data');
                            return;
                        }




                    //将json对象的所有id数据组成一个数组
                    var time = [];
                    for (let i = 0; i < res.data.length; i++) {
                        time.push(res.data[ i ].time);
                    }

                    //将json对象中的所有data数据组成一个数组
                    var data = [];
                    for (let i = 0; i < res.data.length; i++) {
                        data.push(res.data[ i ].data);
                    }


                    setTimeout(()=> {  //为了让加载动画效果明显,这里加入了setTimeout,实现300ms延时
                        myChart.hideLoading(); //隐藏加载动画
                        myChart.setOption({
                            xAxis : {
                                data : time
                            },
                            series : [ {
                                data : data
                            } ]
                        })
                    }, 300)

                })
                    .catch(()=>{
                        console.error();
                    })
            },
        },

    };


</script>

<style scoped lang="scss">

    button {
        display: block;
        margin: auto;
        outline: none;
        height: 40px;
        text-align: center;
        width: 130px;
        border-radius: 40px;
        background: #fff;
        border: 2px solid #1ECD97;
        color: #1ECD97;
        letter-spacing: 1px;
        text-shadow: 0;

    font: {
        size: 20px;
        weight: bold;
    }

    cursor: pointer

    ;
    transition: all

    0.25
    s ease

    ;
    &
    :hover {
        color: white;
        background: #1ECD97;
    }

    &
    :active {
        letter-spacing: 2px;
    }

    }
    #myChart {
        display: block;
        margin: auto;
    }
</style>
