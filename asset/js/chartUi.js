/* LINE CHART UI */
var lineChartFn = function(target, options) {
	var _wrap = $('#'+target).parent();
	var _legendBox;
	var options = options || {};
	// line color
	var charLineColor = ['#ffc14a','#20bac2','#6952db','#001a5c','#0ebb59','#d7c7fe','#fd9c94','#5c0931','#8eddcf','#166440','#e6e6e6','#7394ff','#8b21a6','#bdbdbd','#f56813'];

	// 범례 그리기 함수
	var creatLegendFn = function() {
		var labelItems = chartSet.options.plugins.legend.labels.generateLabels(chartSet);
		var html = '<div class="graphLegendBox"><ul>';
		for(var i = 0; i < labelItems.length; i++){
			html += '<li><button type="button"><span style="background-color:' + labelItems[i].fillStyle + '" aria-hidden="true"></span>' + labelItems[i].text + '</button></span>';
		}
		html += '</div></ul>';

		_wrap.prepend(html);
		_legendBox = $('.graphLegendBox', _wrap);
		_wrap.css({'padding-right' : _legendBox.outerWidth() + 50});
		console.log(labelItems);
	}

	for(var i = 0; i < options.datasets.length; i++){
		options.datasets[i]['backgroundColor'] = charLineColor[i];
		options.datasets[i]['borderColor'] = charLineColor[i];
		options.datasets[i]['pointBackgroundColor'] = charLineColor[i];
		options.datasets[i]['pointBorderColor'] = charLineColor[i];
	}

	//chart lib
	var chartSet = new Chart(
		document.getElementById(target),
		{
			type: 'line',
			data : {
				labels: options.labels,
				datasets: options.datasets
			},
			options: {
				scales: options.scales,
				plugins : {
					legend : {
						display : false
					}
				}
			}
		}
	);
	
	if(options.legend) {//범례 생성
		creatLegendFn();
	
		_wrap.on('click', '.graphLegendBox button', function() {
			console.log('graphLegendBox button - click');
			var _this = $(this);
			var _thisIdx = _this.parent().index();
			var chartType = chartSet.config.type;
			var datasetIndex = chartSet.options.plugins.legend.labels.generateLabels(chartSet)[_thisIdx].datasetIndex;
	
			if (chartType === 'pie' || chartType === 'doughnut') {
				// Pie and doughnut charts only have a single dataset and visibility is per item
				chartSet.toggleDataVisibility(_thisIdx);
			} else {
				chartSet.setDatasetVisibility(datasetIndex, !chartSet.isDatasetVisible(datasetIndex));
			}
			chartSet.update();
		});
	}

	return {
		chartFn : chartSet
	}
}

/* AMCHART TREEMAP */
var treeMapFn = function(target, options) {
	var _target = $(target);
	var _options = options || {};
	// Themes begin
	if(_options.theme === 'dataviz') am4core.useTheme(am4themes_dataviz);
	am4core.useTheme(am4themes_animated);
	// Themes end

	// create chart
	var chart = am4core.create(target, am4charts.TreeMap);
	chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

	chart.data = _options.data;

	chart.colors.step = 2;

	// define data fields
	chart.dataFields.value = "value";
	chart.dataFields.name = "name";
	chart.dataFields.children = "children";

	chart.zoomable = false;
	var bgColor = new am4core.InterfaceColorSet().getFor("background");

	// level 0 series template
	var level0SeriesTemplate = chart.seriesTemplates.create("0");
	var level0ColumnTemplate = level0SeriesTemplate.columns.template;

	level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
	level0ColumnTemplate.fillOpacity = 0;
	level0ColumnTemplate.strokeWidth = 4;
	level0ColumnTemplate.strokeOpacity = 0;

	// level 1 series template
	var level1SeriesTemplate = chart.seriesTemplates.create("1");
	var level1ColumnTemplate = level1SeriesTemplate.columns.template;

	level1SeriesTemplate.tooltip.animationDuration = 0;
	level1SeriesTemplate.strokeOpacity = 1;

	level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10)
	level1ColumnTemplate.fillOpacity = 1;
	level1ColumnTemplate.strokeWidth = 4;
	level1ColumnTemplate.stroke = bgColor;

	var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
	bullet1.locationY = 0.5;
	bullet1.locationX = 0.5;
	bullet1.label.text = "{name}";
	bullet1.label.fill = am4core.color("#ffffff");

	chart.maxLevels = 2;
}