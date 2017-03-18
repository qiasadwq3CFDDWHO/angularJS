//主入口文件
//导入ui.router模块
angular.module('myApp', ['ui.router', 'angularCSS'])
	//ui-router是通过$stateProvider控制状态，一个状态对应一个页面
			//更改状态的方式
//			调用$state.go()方法，这是一个高级的便利方法；
//			点击包含ui-sref指令的链接；
	.config(['$stateProvider', '$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			//路由重定向
			$urlRouterProvider.otherwise('/home');
			$stateProvider
				.state('home', {
					//这里对应着页面上#home的地址
					url : '/home',
					templateUrl : './view/home.html',
					controller : 'HomeCtrl as homeCtrl'
				})
				.state('home.subHome1', {
					url : '/subHome1',
					views : {
						"subHomeView1@home" : {
							templateUrl : './view/home01.html'
						}
					}
				})
				.state('home.subHome2', {
					url : '/subHome2',
					views : {
						"subHomeView2@home" : {
							templateUrl : './view/home02.html'
						},
						"subHomeView1@home" : {
							templateUrl : './view/home01.html'
						}
					}
					
				})
				.state('home.subHome3', {
					url : '/subHome3',
					templateUrl : './view/home03.html'
				})
				.state('market', {
					url : '/market',
					templateUrl : './view/market.html',
					controller : 'MarketCtrl as marketCtrl'
				})
				.state('cart', {
					url : '/cart',
					templateUrl : './view/cart.html',
					controller : 'CartCtrl as cartCtrl'
				})
				.state('mine', {
					url : '/mine',
					templateUrl : './view/mine.html',
					controller : 'MineCtrl as mineCtrl'
				})
			
		}])
	
