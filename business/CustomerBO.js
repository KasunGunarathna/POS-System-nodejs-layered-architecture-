/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var customerDao=require('../dao/CustomerDAO');

exports.addCustomer=function (customer,callback){
    return customerDao.addCustomer(customer,callback);
};

exports.deleteCustomer=function (customerId,callback){
    return customerDao.deleteCustomer(customerId,callback);
};

exports.updateCustomer=function (customer,callback){
    console.log(customer.getId());
    return customerDao.updateCustomer(customer,callback);
};

exports.searchCustomer=function (customerId){
    
};

