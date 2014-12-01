var app=angular.module('AllHands',[]);

app.controller('QuestionController',['$scope',function($scope){
    $scope.questions=[];
	$scope.currentUser="Anonymous";
	$scope.currentQuestion="";
	
	$scope.addQuestion=function()
	{
	   var question={
	     user:$scope.currentUser,
		 date:'18:47 28-11-2014',
		 activity:'asked a question.',
		 content:$scope.currentQuestion
	   };
	   $scope.questions.push(question);
	   $scope.currentUser="Anonymous";
	   $scope.currentQuestion="";
	   console.log('Question Added.');
	};	
	$scope.showMe=false;
}]);