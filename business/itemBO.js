/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var itemBo=require('../dao/itemDAO');

exports.addItem=function (item,callback){
    return itemBo.addItem(item,callback);
};

exports.deleteItem=function (itemCode,callback){
    return itemBo.deleteItem(itemCode,callback);
};

exports.updateItem=function (item,callback){
//    console.log(customer.getId());
    return itemBo.updateItem(item,callback);
};

exports.searchItem=function (itemCode){
    
};

