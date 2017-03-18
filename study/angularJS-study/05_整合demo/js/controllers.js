//注意：这里angular.module('myApp') 第二个参数依赖去掉 
angular.module('myApp')
	//依赖注入$css（这个是angularCSS这个插件中的服务）
	.controller('HomeCtrl', ['$css', 'HomeService', function ($css, HomeService) {
		//引入CSS，路径都是相对于index.html
		$css.add('./css/home.css');
		var self = this;
		//调用服务中的方法
		self.pageName = HomeService.getPageName();
		//获取用户列表的方法
		self.list = HomeService.getUserList();
		self.getUserList = function () {
			console.log("-------------");
			//调用服务中的获取数据的方法
			return HomeService.getUserList();
//			var arr = HomeService.getUserList();
////			console.log(arr);
//			return arr;
		}
	}])
	//$location是一个内置服务，可以获取地址、跳转路由等功能
	.controller('MarketCtrl', ['$location', function ($location) {
		var self = this;
		self.goBack = function () {
			//默认浏览器历史记录
//			window.history.back();
			//跳到指定的路由
			$location.path('home');
		}
		//测试jquery
		$('.market h1').css({
			fontSize : '100px'
		});
		// $q 有三个方法
//		HomeService.getProductList().then(function (result) {
//			
//		});
	}])
	.controller('CartCtrl', ['$routeParams', function ($routeParams) {
		//$routeParams 可以获取到通过路由传过来的所有参数，我们可以通过点
		//语法获取相应的参数
		var self = this;
		self.name = $routeParams.name;
		self.age = $routeParams.age;
	}])
	.controller('MineCtrl', [function () {
		var self = this;
	}])
	//详情
	.controller('DetailCtrl', ['UserService', '$routeParams', function (UserService, $routeParams) {
		var self = this;
//		$routeParams.personId
//		去服务（后台）查询个人详情页面
		self.person = UserService.getUserDetailInfo($routeParams.personId);
	}])
