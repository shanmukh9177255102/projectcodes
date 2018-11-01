var app = angular.module('LoginApp', ['ngRoute']);
app.config(function($routeProvider) {
$routeProvider
.when('/',
{
templateUrl:"LoginApp.html"
})
.when('/dashboard',
{
 resolve:
	{
		"check":function($rootScope,$location)
		{
			if($rootScope.loginflag==1){ $location.path('/dashboard.html');}
               else{  $location.path('/LoginApp.html');}
		}
	}
})
.otherwise(
{
redirectTo:"LoginApp.html"
});
});
app.controller('loginctrl',function($scope,$location)
{   $rootScope.loginflag=0;
	$scope.submit=function()
	{
		if($scope.username==="admin" && $scope.password==="admin")
		{
			$rootScope.loginflag=1;
			$location.path('/dashboard.html');
		}
}});
