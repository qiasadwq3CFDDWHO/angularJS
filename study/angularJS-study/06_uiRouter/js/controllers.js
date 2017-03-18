angular.module('myApp')
	.controller('HomeCtrl', ['$css', function ($css) {
		var self = this;
		$css.add('./css/home.css');
		self.pageName = "控制器-首页";
	}])
