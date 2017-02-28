/**
 * Created by Administrator on 2017/2/27.
 */
(function (angular) {
    angular.module("YCJYApp")
        .factory("factorySignin", ["$http",function ($http) {
            return {
                getFunctions: function (formSignin) {
                    return $http({
                        method: "get",
                        url: "./signin",
                        data: formSignin
                    })
                }
            }
        }])
})(window.angular);