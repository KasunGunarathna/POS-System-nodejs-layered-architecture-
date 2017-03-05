/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mysql=require('mysql');


var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"Company"
});

connection.connect(function (err){
    if(err){
        console.log(err.message);
        return ;
    }
    
    console.log("ela server");
});



exports.getConnection=function (){
    return connection;
};