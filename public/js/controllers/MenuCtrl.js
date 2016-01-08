resume.controller('MenuCtrl', function ($scope){
	$scope.menuItems = [
		{"name": "Home", "link": "#/", "icon": "fa-folder-o"},
		{"name": "D3 Charts", "link": "#/charts", "icon": "fa-pie-chart"},
		{"name": "Code Samples", "link": "#/samples", "icon": "fa-code"}
	]
})