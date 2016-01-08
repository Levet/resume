(function(){
	angular.module('resume').directive('lineChart', ['$window', function($window){


		var margin = {top: 20, right: 15, bottom: 30, left: 32},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;	

		var colorScheme = ["#FDC879", "#F28A60", "#D95E66", "#BF628B", "#93678D"]

		function color(i){
			return colorScheme[i]
		}

		return {
			restrict: "EA",
			template: "<svg width='"+width+"' height='"+height+"' class='lineChart'></svg>",
			link: function(scope, elem, attrs){


				var data = JSON.parse(attrs.chartData);
				var svg = d3.select('.lineChart')
				width = (elem[0].parentNode.offsetWidth - margin.left - margin.right)
				svg.attr('width', width);

				xScale = d3.scale.linear().range([margin.left, width-margin.right]).domain([0, 100]);
				yScale = d3.scale.linear().range([height - (margin.top+10), margin.bottom]).domain([0, 200]);

				xAxis = d3.svg.axis().scale(xScale);
				yAxis = d3.svg.axis().scale(yScale).orient('left');

				svg.append("svg:g")
				.attr('class', 'axis')
				.attr("transform", "translate(0," + (height - margin.bottom) + ")")
				.call(xAxis);

				svg.append("svg:g")
				.attr('class', 'axis')
				.attr("transform", "translate(" + (margin.left) + ",0)")
				.call(yAxis);

				var lineGenerator = d3.svg.line()
				.x(function(d){
					return xScale(d.d);
				})
				.y(function(d){
					return yScale(d.c)
				}).interpolate("basis");

				svg.append('svg:path')
				.attr('d', lineGenerator(data[0]))
				.attr('stroke', color(0))
				.attr('stroke-width', 4)
				.attr('fill', 'none')
				.on('mouseover', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 6)
				})
				.on('mouseleave', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 4)
				})

				svg.append('svg:path')
				.attr('d', lineGenerator(data[1]))
				.attr('stroke', color(1))
				.attr('stroke-width', 4)
				.attr('fill', 'none')
				.on('mouseover', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 6)
				})
				.on('mouseleave', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 4)
				})

				svg.append('svg:path')
				.attr('d', lineGenerator(data[2]))
				.attr('stroke', color(2))
				.attr('stroke-width', 4)
				.attr('fill', 'none')
				.on('mouseover', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 6)
				})
				.on('mouseleave', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 4)
				})

				svg.append('svg:path')
				.attr('d', lineGenerator(data[3]))
				.attr('stroke', color(3))
				.attr('stroke-width', 4)
				.attr('fill', 'none')
				.on('mouseover', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 6)
				})
				.on('mouseleave', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 4)
				})

				svg.append('svg:path')
				.attr('d', lineGenerator(data[4]))
				.attr('stroke', color(4))
				.attr('stroke-width', 4)
				.attr('fill', 'none')
				.on('mouseover', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 6)
				})
				.on('mouseleave', function(){
					d3.select(this)
					.transition()
					.attr('stroke-width', 4)
				})

			}
		}
	}])
}())