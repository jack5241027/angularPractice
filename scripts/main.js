// var a = require('a');
// var b = require('b');
// var c = require('c');
// var time = require('time');

// $(document).ready(function($) {

// });
var app = angular.module('myApp', []);

app.controller('MainController', ['$scope','$log',MainController ])

// //明確相依性注入
// app.controller('MainController', ['$scope','$log', function($scope, $log) {

// }])

// //隱含注入
// app.controller('name', function($scope, $log) {

// })

function MainController($scope,$log){
    var vm = this;
    vm.isCheck = true;
    vm.carts=[];
    vm.cart = {
        'PName':'BMW',
        'Qty':1,
        'price':3000
    }
    vm.carts.push(angular.copy(vm.cart));
    vm.carts.push({
        'PName':'APPLE WATCH',
        'Qty':2,
        'price':20000
    });
    vm.carts.push({
        'PName':'Water',
        'Qty':1,
        'price':30
    });
    vm.carts.push({
        'PName':'Iphone',
        'Qty':1,
        'price':23000
    });


    vm.discount =function(price,qty){
        if(qty>=10){
            return price * qty *0.9
        }else{
            return price * qty
        }
    }

    vm.add = function(){
        vm.carts.push(angular.copy(vm.cart));
    }

    vm.sum = function(){
        var result=0;
        angular.forEach(vm.carts, function($val, $key){
            result += vm.discount($val.price,$val.Qty);
        });
        return result;
    }

    vm.delete = function(item){
        vm.carts.splice(vm.carts.indexOf(item),1);
    }

    vm.edit = function(item){
        item.backUpQty = item.Qty;
        vm.isEdit = true; 
    }

    vm.cancel = function(item){
        item.Qty = item.backUpQty;
        delete vm.isEdit;
        delete item.backUpQty;
    }

    vm.update = function(){
        delete vm.isEdit;
    }
}
