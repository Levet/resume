(function(){
	angular.module('resume').directive('barChart', ['$window', function($window){


		var margin = {top: 20, right: 15, bottom: 30, left: 15},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;	

		var colorScheme = ["#FDC879", "#F28A60", "#D95E66", "#BF628B", "#93678D"]

		function color(i){
			return colorScheme[i]
		}

		return {
			restrict: "EA",
			template: "<svg width='"+width+"' height='"+height+"' class='barChart'></svg>",
			link: function(scope, elem, attrs){
				var data = JSON.parse(attrs.chartData);
				var d3 = $window.d3;
				
				var svg = d3.select(".barChart");
				width = (elem[0].parentNode.offsetWidth - margin.left - margin.right)
				svg.attr('width', width);

				xScale = d3.scale.linear().range([margin.left+20, width-margin.right]).domain([]);
				yScale = d3.scale.linear().range([height - (margin.top+10), margin.bottom]).domain([0, 200]);

				xAxis = d3.svg.axis().scale(xScale);
				yAxis = d3.svg.axis().scale(yScale).orient('left');

				svg.append("svg:g")
				.attr('class', 'axis')
				.attr("transform", "translate(0," + (height - margin.bottom) + ")")
				.call(xAxis);

				svg.append("svg:g")
				.attr('class', 'axis')
				.attr("transform", "translate(" + (margin.left+20) + ",0)")
				.call(yAxis);

				var iterator = 0;
				data.forEach(function(bar){
					var barWidth = width/data.length;
					var item = svg.append('g')
					.attr('class', 'column')
					.append('rect')
					.attr('x', (barWidth*iterator)+40)
					.attr('width', barWidth-55)
					.attr('y', (height-30) - bar)
					.attr('height', 0)
					.attr('fill', color(iterator));

					item.transition().duration(1000)
					.attr('height', bar);

					svg.append('text').text( bar )
					.attr('fill', '#000')
    				.attr('y', height - 10)
    				.attr('x', (barWidth*iterator)+(barWidth/2))
					item.on('mouseover', function(){
						d3.select(this).transition()
						.attr('width', barWidth-10)
					}).on('mouseleave', function(){
						d3.select(this).transition()
						.attr('width', barWidth-55)
					})
					iterator++;
				})
			}
		}
	}])
}())