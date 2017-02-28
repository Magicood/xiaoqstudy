/**
 * Created by Zhang on 2017/2/28.
 */
(function (angular) {
    angular.module("systemModule")
        .directive("calendarDirective",[function () {
            return{
                restrict: "E",
                template:
                "<div class='content'>"+
                "<div class='inner' ng-repeat='i in allIcons'>"+
                "<div class='inner-icon' ng-class='i.icon' style='color:{{i.color}}'></div>"+
                "<div class='inner-title' ng-bind='i.title'></div>"+
                "</div>"+
                "</div>",
                scope:{
                    allIcons:"="
                    //指令内部如何与controller进行数据传递？答：通过指令上自定义属性的绑定策略。
                    // @是指指令内部可以访问指令外部的数据，但是指令外部不能影响指令内部。
                    //=指指令内部和外部数据可以实现双向绑定。&指指令内部可以调用controller中的函数。
                },
                replace:true
            }
        }])
})(window.angular);