(function(){
	angular.module('resume').directive('pieChart', ['$window', function($window){

		var width = height = 500;

		var colorScheme = ["#FDC879", "#F28A60", "#D95E66", "#BF628B", "#93678D"]

		function color(i){
			return colorScheme[i]
		}

		return {
			restrict: "EA",
			template: "<svg width='"+width+"' height='"+height+"'></svg>",
			link: function(scope, elem, attrs){

				var data = JSON.parse(attrs.chartData);
				var d3 = $window.d3;
				var pie = d3.layout.pie().sort(null);
				var data = pie(data);
				var radius = Math.min(width, height) / 2;
				var arcs = [];

				function tweenArc(b) {
				  return function(a, i) {
				    var d = b.call(this, a, i), i = d3.interpolate(a, d);
				    for (var k in d) a[k] = d[k]; // update data
				    return function(t) { return arc(i(t)); };
				  };
				}

				// Add Radius to each of the arcs
				function buildPie(){
					data.forEach(function(arc){
						arc.innerRadius = 0;
						arc.outerRadius = radius-20;
						arcs.push(arc);

					})
				}

				buildPie();
				
				var arc = d3.svg.arc();
				var svg = d3.select(elem.find("svg")[0]);
				
				var svg = svg.selectAll(".arc").data(arcs).enter().append("g")
				.attr("class", "arc")
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

				svg.append("path")
				.attr("fill", function(d, i){ return color(i); })
				.attr("d", arc).on('mouseover', function(){
					d3.select(this).transition().attrTween("d", tweenArc(function(d, i) {
				        return {
				          outerRadius: radius
				        };
				    }));
				}).on('mouseleave', function(){
					d3.select(this).transition().attrTween("d", tweenArc(function(d, i) {
				        return {
				          outerRadius: radius-20
				        };
				    }));
				})
			}
		}
	}])
}())