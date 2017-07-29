type = ['','info','success','warning','danger'];


charts = {
    initPickColor: function(){
        $('.pick-class-label').click(function(){
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if(display_div.length) {
            var display_buttons = display_div.find('.btn');
            display_buttons.removeClass(old_class);
            display_buttons.addClass(new_class);
            display_div.attr('data-class', new_class);
            }
        });
    },

    initFormExtendedDatetimepickers: function(){
        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
         });
    },

    initDocumentationCharts: function(){
        /* ----------==========     Daily Usage Chart initialization For Documentation    ==========---------- */

        dataDailyUsageChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [6, 9, 8, 13, 11, 18, 38]
            ]
        };

        optionsDailyUsageChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailyUsageChart = new Chartist.Line('#dailyUsageChart', dataDailyUsageChart, optionsDailyUsageChart);

        md.startAnimationForLineChart(dailyUsageChart);
    },

    initDashboardPageCharts: function(){

        /* ----------==========     Daily Usage Chart initialization    ==========---------- */

        dataDailyUsageChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [6, 9, 8, 13, 11, 18, 38]
            ]
        };

        optionsDailyUsageChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailyUsageChart = new Chartist.Line('#dailyUsageChart', dataDailyUsageChart, optionsDailyUsageChart);

        md.startAnimationForLineChart(dailyUsageChart);


        /* ----------==========     Monthly Usage Chart initialization    ==========---------- */

        var dataMonthlyUsageChart = {
          labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          series: [
            [242, 343, 220, 380, 153, 253, 326, 434, 268, 110, 156, 95]

          ]
        };
        var optionsMonthlyUsageChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 500,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        var MonthlyUsageChart = Chartist.Bar('#monthlyUsageChart', dataMonthlyUsageChart, optionsMonthlyUsageChart, responsiveOptions);

        //start animation for the Monthly Usage Chart
        md.startAnimationForBarChart(monthlyUsageChart);

    },


	showNotification: function(from, align){
    	color = Math.floor((Math.random() * 4) + 1);

    	$.notify({
        	icon: "notifications",
        	message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

        },{
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
	}

}
