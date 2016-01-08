resume.controller('ResumeCtrl', function ($scope, $modal){

	$scope.languages = [
		{name: 'Javascript', proficiency: 90}, 
		{name: 'PHP', proficiency: 60}, 
		{name: 'HTML', proficiency: 90}, 
		{name: 'CSS', proficiency: 60},
		{name: 'Sql', proficiency: 80},
		{name: 'Ruby', proficiency: 20},
		{name: 'Python', proficiency: 35},
		{name: 'C++', proficiency: 20},
		{name: 'Java', proficiency: 20}
	];

	$scope.technologies = [
		"NodeJS",
		"AngularJS",
		"MeteorJS",
		"JQuery",
		"MongoDB",
		"Bootstrap",
		"Git",
		"WordPress",
		"phpMyAdmin",
		"cPanel",
		"Apache",
		"ngynx",
		"Linux",
		"Google Analytics",
		"Google Webmaster Tools",
		"Google Apis",
		"ExpressJS", 
		"Amazon EC2",
		"Amazon RDS",
		"d3js",
		"Less",
		"Grunt",
		"Sass"
	];

	$scope.contact = function(){
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: '/partials/modal.html',
			controller: 'ModalCtrl',
			size: 'md'
		})
	}

	$scope.recommendations = [
		{
			author: "Dan Gregson",
			snippet: "Jordan is one of the best people I've had the chance to work with.",
			body: "Jordan is one of the best people I've had the chance to work with. At Online Image there were always a deluge of tasks that required many different types of skillsets. Jordan is the type of person that is always excited for a new challenge, so many of these tasks went his way. He is a very fast worker, but the quality does not suffer. Jordan has a can-do mindset. When he is confronted with a challenge or obstacle he takes the time to come up with a proper solution. Jordan is a very fast learner and he loves being challenged. He is very motivated, and his positive and friendly attitude affect company culture in very positive ways.",
			date: "May 19, 2015",
			recommendation: "Jordan is one of the best people I've had the chance to work with.",
			displayMore: false
		},
		{
			author: "Alexis Abbot",
			snippet: "Jordan's can do attitude has created a very strange niche for him at Online Image.",
			body: "Jordan's can do attitude has created a very strange niche for him at Online Image. No one really knows what his job description is, other than software needs to be built, Jordan is up to the task. I've personally watched Jordan's skill set evolve over the past few years, even to surpass my own and each week he still amazes me with how much he can learn in so little time. If you want something built and no one else knows how to do it? Go to Jordan.",
			date: "February 20, 2015",
			recommendation: "Jordan is one of the best people I've had the chance to work with.",
			displayMore: false
		}
	]

	$scope.recommendationToggle = function(index){
		var target = $scope.recommendations[index];
		if(target.displayMore){
			target.recommendation = target.snippet;
		} else {
			target.recommendation = target.body;
		}
		target.displayMore = !target.displayMore;
	}
})