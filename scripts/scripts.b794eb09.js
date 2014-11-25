"use strict";angular.module("hoqiiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:id",{templateUrl:"views/router.html",controller:"routerCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hoqiiApp").controller("MainCtrl",["$scope","$window",function(a,b){a.slide={interval:5e3,slides:[{image:"images/bg1.jpg",text:"title",title:"QPOS",description:"Sistem POS terpadu menggunakan Android sebagai Point of Sales Anda.",faClass:"fa-tablet"},{image:"images/bg2.jpg",text:"title",title:"QDelivery",description:"Sistem Penjualan dan Pesan Antar terintegrasi.",faClass:"fa-truck"},{image:"images/bg3.jpg",text:"title",title:"Toko Online",description:"Otomatis setiap site dapat menjadi toko online terpadu",faClass:"fa-bookmark-o"}]},a.slide.labelStyle={"padding-top":b.innerHeight/3},a.slide.getStyle=function(c){return{height:b.innerHeight,"background-image":"url("+a.slide.slides[c].image+")","background-position":"50%"}}}]),angular.module("hoqiiApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hoqiiApp").directive("dynamicTopNav",["$window",function(a){return{link:function(b,c){c.find(".dropdown-toggle").dropdown(),c.find("#buttom-logo").hide(),$(window).scroll(function(){var b=$(window).scrollTop(),d=a.innerHeight-50;b>d?(c.addClass("navbar-scroll"),c.find("#buttom-logo").show(),c.find("#buttom-logo").css("height","36px"),c.find("#top-logo").hide()):(c.find("#buttom-logo").hide(),c.find("#top-logo").show(),c.hasClass("navbar-scroll")&&c.removeClass("navbar-scroll"))})}}}]),angular.module("hoqiiApp").controller("topNavCtrl",["$scope","topNavService","$location",function(a,b,c){a.$on("$routeChangeStart",function(){if("/"!==c.path()){var a=$("[dynamic-top-nav]");a.addClass("navbar-scroll"),a.find("#buttom-logo").show(),a.find("#buttom-logo").css("height","36px"),a.find("#top-logo").hide()}}),b.getMenus().success(function(b){a.menus=b})}]),angular.module("hoqiiApp").factory("topNavService",["$http",function(a){return{getMenus:function(){return a.get("scripts/contents/topnav.json")}}}]),angular.module("hoqiiApp").factory("footerService",["$http",function(a){return{getMenus:function(){return a.get("scripts/contents/footer.json")}}}]),angular.module("hoqiiApp").controller("footerCtrl",["$scope","footerService",function(a,b){b.getMenus().success(function(b){a.menus=b})}]),angular.module("hoqiiApp").directive("scrollTo",function(){return{restrict:"A",link:function(a,b,c){b.on("click",function(){$("body").animate({scrollTop:$(c.scrollTo).offset().top-10},"slow")})}}}),angular.module("hoqiiApp").controller("routerCtrl",["$scope","$routeParams",function(a,b){a.templateUrl="views/"+b.id+".html"}]);