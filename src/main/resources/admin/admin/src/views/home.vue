<template>
<div class="content">

		<div class="text main-text" style="margin-top: 0;">欢迎使用 {{this.$project.projectName}}</div>
		<div style="display: flex;width: 100%;flex-wrap: nowrap;justify-content: space-around;margin-top: 20px;">
			<div id="statistic" style="width:45%;height:500px"></div>
			<div id="statistic2" style="width:45%;height:500px;"></div>
		</div>
		

</div>
</template>
<script>
import router from '@/router/router-static'
export default {
  mounted(){
    this.init();
	this.baobiao();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
	baobiao(){
		this.$nextTick(()=>{
		    var statistic = this.$echarts.init(document.getElementById("statistic"),'macarons');
		    let params = {
		        tableName: "yonghu",
		        groupColumn: "sex_types",
		    }
		    this.$http({
		        url: "newSelectGroupCount",
		        method: "get",
		        params: params
		    }).then(({data}) => {
		        if (data && data.code === 0) {
		            let res = data.data;
		            let xAxis = [];
		            let yAxis = [];
		            let pArray = []
		            var option = {};
		            for(let i=0;i<res.length;i++){
		                xAxis.push(res[i].name);
		                yAxis.push(res[i].value);
		                pArray.push({
		                    value: res[i].value,
		                    name: res[i].name
		                })
		                option = {
		                    title: {
		                        text: '入住人员性别统计',
		                        left: 'center'
		                    },
		                    tooltip: {
		                        trigger: 'item',
		                        formatter: '{b} : {c} ({d}%)'
		                    },
		                    series: [
		                        {
		                            type: 'pie',
		                            radius: '55%',
		                            center: ['50%', '60%'],
		                            data: pArray,
		                            emphasis: {
		                                itemStyle: {
		                                    shadowBlur: 10,
		                                    shadowOffsetX: 0,
		                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                                }
		                            }
		                        }
		                    ]
		                };
		            }
		                statistic.setOption(option,true);
		                window.onresize = function() {
		                    statistic.resize();
		                };
		        }
		    });
		})
		
		
		let _this = this;
		let params = {
		    // dateFormat :"%Y", //%Y-%m
		    // riqi :_this.echartsDate.getFullYear(),
		    // riqi :_this.echartsDate.getFullYear()+"-"+(_this.echartsDate.getMonth() + 1 < 10 ? '0' + (_this.echartsDate.getMonth() + 1) : _this.echartsDate.getMonth() + 1),
		    thisTable : {//当前表
		        tableName :'qinshi',//当前表表名,
		        // sumColum : 'qinshi_number', //求和字段
		        // date : 'insert_time',//分组日期字段
		        // string : 'qinshi_name',//分组字符串字段
		        types : 'status_types',//分组下拉框字段
		    },
		    // joinTable : {//级联表（可以不存在）
		    //     tableName :'yonghu',//级联表表名
		    //     // date : 'insert_time',//分组日期字段
		    //     string : 'yonghu_name',//分组字符串字段
		    //     // types : 'yonghu_types',//分组下拉框字段
		    // }
		}
		_this.$nextTick(() => {
		    var statistic = this.$echarts.init(document.getElementById("statistic2"), 'macarons');
		    this.$http({
		        url: "barCount",
		        method: "get",
		        params: params
		    }).then(({data}) => {
		        if(data && data.code === 0){
		
		            //柱状图 求和 已成功使用
		            //start
		            let yAxisName = "数值";//根据查询数据具体改(单列要改,多列不改)
		            let xAxisName = "月份";
		            let series = [];//具体数据值
		            data.data.yAxis.forEach(function (item,index) {
		                let tempMap = {};
		                // tempMap.name= ["数值"];//根据查询数据具体改(单列要改,多列不改)
		                tempMap.name=data.data.legend[index];
		                tempMap.type='bar';
		                tempMap.data=item;
		                series.push(tempMap);
		
		            })
		
		            var option = {
		                tooltip: {
		                    trigger: 'axis',
		                    axisPointer: {
		                        type: 'cross',
		                        crossStyle: {
		                            color: '#999'
		                        }
		                    }
		                },
		                toolbox: {
		                    feature: {
		                        // dataView: { show: true, readOnly: false },  // 数据查看
		                        magicType: { show: true, type: ['line', 'bar'] },//切换图形展示方式
		                        // restore: { show: true }, // 刷新
		                        saveAsImage: { show: true }//保存
		                    }
		                },
		                legend: {
		                    data: data.data.legend//标题  可以点击导致某一列数据消失
		                },
		                xAxis: [
		                    {
		                        type: 'category',
		                        axisLabel:{interval: 0},
		                        name: xAxisName,
		                        data: data.data.xAxis,
		                        axisPointer: {
		                            type: 'shadow'
		                        }
		                    }
		                ],
		                yAxis: [
		                    {
		                        type: 'value',//不能改
		                        name: yAxisName,//y轴单位
		                        axisLabel: {
		                            formatter: '{value}' // 后缀
		                        }
		                    }
		                ],
		                series:series//具体数据
		            };
		            // 使用刚指定的配置项和数据显示图表。
		            statistic.setOption(option,true);
		            //根据窗口的大小变动图表
		            window.onresize = function () {
		                statistic.resize();
		            };
		            //end
		        }else {
		            this.$message({
		                message: "报表未查询到数据",
		                type: "success",
		                duration: 1500,
		                onClose: () => {
		                    this.search();
		                }
		            });
		        }
		    });
		});
		
		
	}
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 500px;
  text-align: center;
  .main-text{
    font-size: 38px;
    font-weight: bold;
    margin-top: 15%;
  }
  .text {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
}
</style>