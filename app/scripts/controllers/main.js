'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'QPOS',
    			'description': 'Sistem POS terpadu menggunakan Android sebagai Point of Sales Anda.',
    			'faClass': 'fa-tablet',
                'link': '#/qpos'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'QDelivery',
    			'description': 'Sistem Penjualan dan Pesan Antar terintegrasi.',
    			'faClass': 'fa-truck',
                'link': '#/qdelivery'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Toko Online',
    			'description': 'Otomatis setiap site dapat menjadi toko online terpadu',
    			'faClass': 'fa-bookmark-o',
                'link': '#/qstore'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%'
    	};
    };
  });
