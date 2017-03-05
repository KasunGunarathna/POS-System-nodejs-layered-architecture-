/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var connectionFactory=require('./connectionFactory');
var mysql=require('mysql');

//add customer
exports.addCustomer=function (customer,callback){
    var connection=connectionFactory.getConnection();
    var sql="INSERT INTO Customer VALUES(?,?,?,?)";
    var params=[customer.getId(),customer.getName(),customer.getAddress(),customer.getSalary()];
    
    sql=mysql.format(sql,params);
    connection.query(sql,function (err,result,fields){
        if(err){
            console.log(err.message);
            callback(false);
            return ;
        }
        callback(result.affectedRows>0);
        console.log(result.affectedRows>0);
        console.log("add ela");
    });
    
 };
//delete customer
exports.deleteCustomer=function (customerId,callback){
    console.log(customerId);
    var connection=connectionFactory.getConnection();
    var sql="DELETE FROM Customer WHERE id=?";
    
    var params=[customerId];
    
    sql=mysql.format(sql,params);
     console.log(sql);
    connection.query(sql,function (err,result,fields){
        if(err){
            console.log(err.message);
            callback(false);
            return ;
        }
        callback(result.affectedRows>0);
        console.log(result.affectedRows>0);
        console.log("delete ela");
    });
    
};
//update customer
exports.updateCustomer=function (customer,callback){
    console.log(customer.getId());
    var connection=connectionFactory.getConnection();
    var sql="UPDATE Customer SET name = ?, address = ?, salary = ? WHERE id = ?";
    
    var params=[customer.getName(),customer.getAddress(),customer.getSalary(),customer.getId()];
    
    sql=mysql.format(sql,params);
     console.log(sql);
    connection.query(sql,function (err,result,fields){
        if(err){
            console.log(err.message);
            callback(false);
            return ;
        }
        callback(result.affectedRows>0);
        console.log(result.affectedRows>0);
        console.log("update ela");
    });
};
//exports.searchCustomer=function (){
//    
//};


