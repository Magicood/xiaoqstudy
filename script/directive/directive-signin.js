/**
 * Created by Administrator on 2017/2/27.
 */
(function (angular) {
    angular.module("YCJYApp")
    .directive("directiveSignin", function () {
        return {
            restrict: "ECMA",
            scope: {
                getFun: "=",
                submit:"&",
                formSignin: "="
            },
            replace: true,
            template: '\
            <div class="container">\
                <form class="form-signin" name="formSignin" ng-submit="submit()" novalidate>\
                    <h2 class="form-signin-heading">请登陆</h2>\
                    <label for="inputAccount" class="sr-only">账号</label>\
                    <input type="text" id="inputAccount" class="form-control"\
                     placeholder="账号" ng-model="formSignin.account" required autofocus>\
                    <label for="inputPassword" class="sr-only">密码</label>\
                    <input type="password" id="inputPassword" class="form-control"\
                     placeholder="密码" ng-model="formSignin.password" required>\
                    <div class="checkbox">\
                        <label>\
                            <input type="checkbox" value="remember-me"> 记住密码30天\
                        </label>\
                    </div>\
                    <button class="btn btn-lg btn-primary btn-block" type="submit">登陆</button>\
                </form>\
            </div>',
            link: function (scope, ele, attr) {

            }
        }
    })
})(window.angular);