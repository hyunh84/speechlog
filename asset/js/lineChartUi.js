var lineChartFn = function(target, options) {
	var _wrap = $('#'+target).parent();
	var _legendBox;
	var options = options || {};
	// line color
	var charLineColor = ['#ffc14a','#20bac2','#6952db','#001a5c','#0ebb59','#d7c7fe','#fd9c94','#5c0931','#8eddcf','#166440','#e6e6e6','#7394ff','#8b21a6','#bdbdbd','#f56813'];
	// var labelName = [];
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
		options.datasets[i]['pointBackgroundColor'] = 'transparent';
		options.datasets[i]['pointBorderColor'] = 'transparent';
	}

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
	
	if(options.legend) {
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