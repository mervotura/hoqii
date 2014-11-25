"use strict";angular.module("hoqiiApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:id",{templateUrl:"views/router.html",controller:"routerCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("hoqiiApp").controller("MainCtrl",["$scope","$window",function(a,b){a.slide={interval:5e3,slides:[{image:"images/bg1.jpg",text:"title",title:"QPOS",description:"Sistem POS terpadu menggunakan Android sebagai Point of Sales Anda.",faClass:"fa-tablet",link:"#/qpos"},{image:"images/bg2.jpg",text:"title",title:"QDelivery",description:"Sistem Penjualan dan Pesan Antar terintegrasi.",faClass:"fa-truck",link:"#/qdelivery"},{image:"images/bg3.jpg",text:"title",title:"Toko Online",description:"Otomatis setiap site dapat menjadi toko online terpadu",faClass:"fa-bookmark-o",link:"#/qstore"}]},a.slides=a.slide.slides,a.slide.labelStyle={"padding-top":b.innerHeight/3},a.slide.getStyle=function(c){return{height:b.innerHeight,"background-image":"url("+a.slide.slides[c].image+")","background-position":"50%"}}}]),angular.module("hoqiiApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("hoqiiApp").directive("dynamicTopNav",["$window","$location",function(a,b){return{link:function(c){var d=angular.element(a);d.bind("scroll",function(){if("/"===b.path()||"index.html"===b.path()){var e=d.scrollTop(),f=a.innerHeight;c.logoTransparent=f-100>=e}else c.logoTransparent=!1;c.$apply()})}}}]),angular.module("hoqiiApp").controller("topNavCtrl",["$scope","topNavService","$location",function(a,b,c){a.logoTransparent=!0,a.$on("$routeChangeStart",function(){a.isNotIndex="/"!==c.path()&&"index.html"!==c.path(),a.logoTransparent=a.isNotIndex?!1:!0}),b.getMenus().success(function(b){a.menus=b})}]),angular.module("hoqiiApp").factory("topNavService",["$http",function(a){return{getMenus:function(){return a.get("scripts/contents/topnav.json")}}}]),angular.module("hoqiiApp").factory("footerService",["$http",function(a){return{getMenus:function(){return a.get("scripts/contents/footer.json")}}}]),angular.module("hoqiiApp").controller("footerCtrl",["$scope","footerService",function(a,b){b.getMenus().success(function(b){a.menus=b})}]),angular.module("hoqiiApp").directive("scrollTo",function(){return{restrict:"A",link:function(a,b,c){angular.element(b).bind("click",function(){angular.element("body").animate({scrollTop:angular.element(c.scrollTo).offset().top-65},"slow")})}}}),angular.module("hoqiiApp").controller("routerCtrl",["$scope","$routeParams",function(a,b){a.templateUrl="views/"+b.id+".html"}]);