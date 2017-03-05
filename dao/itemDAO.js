/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var connectionFactory=require('./connectionFactory');
var mysql=require('mysql');

//add customer
exports.addItem=function (item,callback){
    var connection=connectionFactory.getConnection();
    var sql="INSERT INTO Item VALUES(?,?,?,?)";
    var params=[item.getCode(),item.getDescription(),item.getUnitPrice(),item.getQtyOnHand()];
    
    sql=mysql.format(sql,params);
    connection.query(sql,function (err,result,fields){
        if(err){
            console.log(err.message);
            callback(false);
            return ;
        }
        callback(result.affectedRows>0);
        console.log(result.affectedRows>0);
        console.log("add item ela");
    });
    
 };
////delete customer
//exports.deleteItem=function (itemId,callback){
//    console.log(itemId);
//    var connection=connectionFactory.getConnection();
//    var sql="DELETE FROM item WHERE code=?";
//    
//    var params=[customerId];
//    
//    sql=mysql.format(sql,params);
//     console.log(sql);
//    connection.query(sql,function (err,result,fields){
//        if(err){
//            console.log(err.message);
//            callback(false);
//            return ;
//        }
//        callback(result.affectedRows>0);
//        console.log(result.affectedRows>0);
//        console.log("delete item ela");
//    });
//    
//};
////update customer
//exports.updateCustomer=function (customer,callback){
//    console.log(customer.getId());
//    var connection=connectionFactory.getConnection();
//    var sql="UPDATE item SET description= ?, unitPrice = ? qtyOnHand=? WHERE code = ?";
//    
//    var params=[item.getDescription(),item.getUnitPrice,customer.getQtyOnHand(),customer.getCode()];
//    
//    sql=mysql.format(sql,params);
//     console.log(sql);
//    connection.query(sql,function (err,result,fields){
//        if(err){
//            console.log(err.message);
//            callback(false);
//            return ;
//        }
//        callback(result.affectedRows>0);
//        console.log(result.affectedRows>0);
//        console.log("update ela");
//    });
//};
////exports.searchCustomer=function (){
////    
////};
//
//
//
//
