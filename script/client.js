/**
 * Created by lenovo on 2017/2/16.
 */


(function (angular) {

    angular.module("systemModule")
        .controller("systemController",["$scope","$http","$ionicScrollDelegate",function ($scope,$http,$ionicScrollDelegate) {
            document.addEventListener("deviceready",function () {
                var i=0;
                $scope.getBook=function () {
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book2=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book3=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    $scope.$digest();
                };
                $scope.getBook2=function () {
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book4=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book5=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book6=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    $scope.$digest();
                };
                $scope.getBook3=function () {
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book7=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book8=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    if(i==JSON.parse(localStorage.getItem("book")).length){
                        i=0;
                    }
                    $scope.book9=JSON.parse(localStorage.getItem("book"))[i];
                    i++;
                    $scope.$digest();
                };
                functionTap=function () {
                    var cordovaHttp = cordova.plugin.http;
                    cordovaHttp.get("http://192.168.0.102:8888/data-api",null,null,function (res) {
                        try{
                            if (typeof(Storage) !== "undefined") {
                                localStorage.setItem("book",res.data);
                                var temp=JSON.parse(res.data);
                                $scope.book = temp[0];
                                $scope.book2 = temp[1];
                                $scope.book3 = temp[2];
                                $scope.book4 = temp[3];
                                $scope.book5 = temp[4];
                                $scope.book6 = temp[5];
                                $scope.book7 = temp[6];
                                $scope.book8 = temp[7];
                                $scope.book9 = temp[0];
                                $scope.rank = [
                                    temp[0],
                                    temp[1],
                                    temp[2]

                                ];
                                $scope.$digest();
                            }
                            else{
                                alert("抱歉，您的浏览器不支持localStorage")
                            }
                        }catch(e){
                            alert("Json parsing error")
                        }

                    },function () {
                        alert("error");
                    })
                };
                if(!localStorage.getItem("book")){
                    functionTap();
                }
                else {
                    var temp =JSON.parse(localStorage.getItem("book"));
                    $scope.book =  temp[0];
                    $scope.book2 = temp[1];
                    $scope.book3 = temp[2];
                    $scope.book4 = temp[3];
                    $scope.book5 = temp[4];
                    $scope.book6 = temp[5];
                    $scope.book7 = temp[6];
                    $scope.book8 = temp[7];
                    $scope.book9 = temp[0];
                    $scope.rank = [
                        temp[0],
                        temp[1],
                        temp[2]
                    ];
                }
                $scope.fullRank=function () {
                    $scope.rank=JSON.parse(localStorage.getItem("book"));
                };
                $scope.changeShow=function () {
                    $scope.isShow=false;
                };
                $scope.show=function () {
                    setTimeout(show,500);

                };
                $scope.pickUpShow=false;
                $scope.pickUpShowFn=function () {
                    $scope.pickUpShow=true;
                };
                $scope.pickUp=function () {
                    $scope.rank = [
                        JSON.parse(localStorage.getItem("book"))[0],
                        JSON.parse(localStorage.getItem("book"))[1],
                        JSON.parse(localStorage.getItem("book"))[2]

                    ];
                    $scope.pickUpShow=false;
                };

            },false);
            $scope.scrollTop=function () {
                $ionicScrollDelegate.scrollTop(true);
            };

           // var show=function () {
           //      $scope.isShow=true;
           //  };
            // $scope.doRefresh = function(){
            //     $http.get('')  //注意改为自己本站的地址，不然会有跨域问题
            //         .success(function(newItems) {
            //             $scope.items = newItems;
            //         })
            //         .finally(function() {
            //             $scope.$broadcast('scroll.refreshComplete');
            //
            //         });
            // };
            // $scope.myActiveSlide = 1;

        }]);
        // .run(function($ionicPlatform) {
        //     $ionicPlatform.ready(function() {
        //         if(window.cordova && window.cordova.plugins.Keyboard) {
        //             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        //         }
        //         if(window.StatusBar) {
        //             StatusBar.styleDefault();
        //         }
        //     });
        // })

})(window.angular);