(function(){
	angular.module('resume').directive('lineChart', ['$window', 'ChartsService', function($window, ChartsService){


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

				ChartsService.stocks()
				.then(function(response){
					console.log(response)
					var data = response.data.dataset.data;
					var svg = d3.select('.lineChart')
					width = (elem[0].parentNode.offsetWidth - margin.left - margin.right)
					svg.attr('width', width);
	            
			        xScale = d3.time.scale().domain(d3.extent(data, function(d) { return new Date(d[0]) })).range([margin.left, width-margin.right]);
					yScale = d3.scale.linear().domain(d3.extent(data, function(d) { return d[1] })).range([height - (margin.top+10), margin.bottom]);

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
						return xScale(new Date(d[0]));
					})
					.y(function(d){
						console.log(d[1])
						return yScale(d[1]);
					}).interpolate("cardinal");

					svg.append('svg:path')
					.attr('d', lineGenerator(data))
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

					var circleRadius = 2;

					data.forEach(function(d){

						svg.append('circle')
						.attr('class', 'lineChartCircle')
						.attr('r', circleRadius+2)
						.attr('cx', function(){
							return xScale(new Date(d[0]));
						})
						.attr('cy', function(){
							return yScale(d[1]);
						})
						.attr('fill', '#FDC879')
						.attr('stroke', '#fff')
						.attr('stroke-width', 1)
						.on('mouseover', function(){
							d3.select(this).transition()
							.attr('r', 10)
							.attr('fill', '#fff')
							.attr('stroke', '#FDC879')
						})
						.on('mouseleave', function(){
							d3.select(this).transition()
							.attr('r', circleRadius+2)
							.attr('fill', '#FDC879')
							.attr('stroke', '#fff')
						})
						.on('click', function(){
							
						})
					})


					
				})
			}
		}
	}])
}())