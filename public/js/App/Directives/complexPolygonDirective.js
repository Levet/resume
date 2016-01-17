(function(){
	angular.module('resume').directive('complexPolygon', ['$window', function($window){



		var width = 500,
		    height = 500;

		return {
			restrict: "EA",
			template: "<svg width='"+width+"' height='"+height+"' class='complexPolygon'></svg>",
			link: function(scope, elem, attrs){

				var d3 = $window.d3;
				
				var xScale = d3.scale.linear()
				    .domain([0, 20])
				    .range([0, width]);

				var yScale = d3.scale.linear()
				    .domain([0, 20])
				    .range([height, 0]);

				var xAxis = d3.svg.axis()
				    .scale(xScale)
				    .orient("bottom");

				var yAxis = d3.svg.axis()
				    .scale(yScale)
				    .orient("left");

				var svg = d3.select(".complexPolygon");

				svg.append("polyline")
				.attr('points', '0 250, 35 140, 100 50, 200 0, 300 0, 400 50, 475 150, 500 250, 465 360, 400 450, 300 500, 200 500, 100 450, 35 360, 0 250, 475 150, 100 450, 300 0, 300 500, 100 50, 465 360, 0 250, 35 140, 500 250, 35 360, 400 50, 200 500, 200 0, 400 450, 200 500, 35 360, 35 140, 200 0, 400 50, 500 250, 400 450, 465 360, 475 150, 300 0, 100 50, 0 250, 100 450, 300 500, 465 360, 200 0, 100 450, 465 360, 35 360, 100 50, 400 50, 465 360, 300 0, 0 250, 200 500, 35 140, 400 50, 400 450, 100 450, 100 50, 475 150, 300 500, 35 360, 200 0, 475 150, 400 450, 35 360, 300 0, 500 250, 200 500, 465 360, 400 450, 35 140, 300 0, 400 450, 0 250, 300 500, 500 250, 100 50, 200 500, 475 150, 35 140, 300 500, 400 50, 0 250, 200 0, 500 250, 100 450, 35 140')
				.attr('fill', 'white')
				.style('stroke', 'blue')
			}
		}
	}])
}())