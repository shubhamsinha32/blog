//Dashboard JS
window.onload = function() {
	// Construct options first and then pass it as a parameter
	var options = {
		animationEnabled : true,
		data : [ {
			type : "column", //change it to line, area, bar, pie, etc
			showInLegend : true,
			dataPoints : [ {
				y : 22
			}, {
				y : 10
			}, {
				y : 0
			}, {
				y : 0
			}, {
				y : 0
			}, {
				y : 9
			}, {
				y : 20
			}, {
				y : 0
			}, {
				y : 0
			} ]
		} ]
	};
	$("#resizable").resizable({
		create : function(event, ui) {
			//Create chart.
			$("#chartContainer1").CanvasJSChart(options);
			$("#chartContainer2").CanvasJSChart(options);
			$("#chartContainer3").CanvasJSChart(options);
			$("#chartContainer4").CanvasJSChart(options);
		},
		resize : function(event, ui) {
			//Update chart size according to its container size.
			$("#chartContainer1").CanvasJSChart().render();
			$("#chartContainer2").CanvasJSChart().render();
			$("#chartContainer3").CanvasJSChart().render();
			$("#chartContainer4").CanvasJSChart().render();
		}
	});
}

function viewPanel(id) {
	$('#'+id).toggle();
}

