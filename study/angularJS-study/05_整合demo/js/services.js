//这里统一管理service(服务)
angular.module('myApp')
	.factory('HomeService', [function () {
		var list = [
					{ personId: 1001, name : 'b', age : '18' },
					{ personId: 1002, name : 'a', age : '15' },
					{ personId: 1003, name : 'c', age : '20' },
					{ personId: 1004, name : 'd', age : '17' }
				];
		return {
			getUserList : function () {
				// 模拟获取用户列表数据
				return list;
			},
			getPageName : function () {
				//模拟获取页面名字数据
				return "我是首页";
			}
		}
	}])
	//获取用户信息的服务
	.factory('UserService', [function () {
		var list = [
					{ personId: 1001, name : 'b', age : '18' },
					{ personId: 1002, name : 'a', age : '15' },
					{ personId: 1003, name : 'c', age : '20' },
					{ personId: 1004, name : 'd', age : '17' }
				];
		return {
			//获取用户详情信息的接口
			getUserDetailInfo : function (personId) {
				for (var personObj of list) {
					if (personObj.personId == personId) {
						return personObj;
					}
				}
				return null;
			}
		}
	}])
	.factory('ProductService', ['$http', function ($http) {
		return {
			getProductList : function () {
				return $http.get("xxxx.php");
			},
//			getProductDetail : function (productId) {
//				var list = null;
//				getProductList().then(function (result) {
//					list = result;		
//				})
//				return list;
////				return procutObj
//			}
		}
	}])