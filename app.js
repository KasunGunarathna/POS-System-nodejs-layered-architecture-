/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express =require('express');
var app=express();

var serviceFactory=require('./service/serviceFactory');




app.use(express.static("public"));
app.use(["./index.html/","/"],serviceFactory);

app.listen(5050);

