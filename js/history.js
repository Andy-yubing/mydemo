$(function(argument) {
    var myChart = echarts.init(document.getElementById('history_echarts'));
    var option = {
    	title:{
	    	text: '数值',
	    	left:'center',
	    	textStyle:{
	    		color:"#fff"
	    	},
	    },
	    grid:{
	    	containLabel:false,
	    },
        xAxis: {
            type: 'category',
            "splitLine": {
                "show": true,
                lineStyle: {
                    color: '#e2e5ea',
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#e2e5ea',
                }
            },
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            "splitLine": {
                lineStyle: {
                    color: '#e2e5ea',
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#e2e5ea',
                }
            },
            axisLabel:{
            	margin: 2,
            }
        },
        series: [{
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: 'rgba(84,155,228,.7)'
                    }
                }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    };
    myChart.setOption(option);
})