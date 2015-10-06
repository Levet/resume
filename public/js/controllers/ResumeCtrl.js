resume.controller('ResumeCtrl', function ($scope){
	$scope.languages = [
		{name: 'Javascript', proficiency: 80}, 
		{name: 'PHP', proficiency: 60}, 
		{name: 'HTML', proficiency: 90}, 
		{name: 'CSS', proficiency: 60},
		{name: 'MySql', proficiency: 80},
		{name: 'MongoDB', proficiency: 75}
	];

	$scope.technologies = [
		"NodeJS",
		"AngularJS",
		"MeteorJS",
		"JQuery",
		"Bootstrap",
		"Wordpress",
		"phpMyAdmin",
		"cPanel",
	]
})