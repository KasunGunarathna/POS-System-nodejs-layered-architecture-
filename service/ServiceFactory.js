/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express=require('express');
var routingHadler=express.Router();
var bodyParser = require('body-parser');
var customerDto=require('../dto/CustomerDTO');
var itemDto=require('../dto/itemDTO');

var customerBO=require('../business/CustomerBO');
var itemBO=require('../business/itemBO');


routingHadler.use(bodyParser.json()); // for parsing application/json
routingHadler.use(bodyParser.urlencoded({ extended: true }));



routingHadler.all("/:service/:serviceType",function (req,res){
    
    switch (req.params.service){
        case "customer":
            var customer=new customerDto(req.body.txtCustomerId,
                             req.body.txtCustomerName,
                             req.body.txtCustomerAddress,
                             req.body.txtCustomerSalary);
            switch (req.params.serviceType){
                case "add":
//                    res.send("add");
                    
                    customerBO.addCustomer(customer,function (result){
                        if(result){
                            res.json({result:"success"});
                        }else{
                            res.send({result:"failed"});
                        }
                    });
                    
//                    console.log(customer.toJson());                         
//                    res.send(customer.toJson());
                    break;
                    case "delete":
//                        res.send("delete");
                        customerBO.deleteCustomer(customer.getId(),function (result){
                           if(result){
                               res.json({result:"success"});
                           } else{
                               res.json({result:"failed"});
                           }
                        });
                        break;
                    case "update":
//                        res.send("update");
                        customerBO.updateCustomer(customer,function (result){
                           if(result){
                               res.json({result:"success"});
                           } else{
                               res.json({result:"failed"});
                           }
                        });
                        break;
                    case "search":
                        res.send("search");
                        break;
                        default :
                            res.send("default");
                            break;
                    }
                    break;
        case "item":
            var item=new itemDto(req.body.txtItemCode,
                             req.body.txtItemDesc,
                             req.body.txtItemUprice,
                             req.body.txtItemQOH);
            switch (req.params.serviceType){
                case "add":
//                    res.send("add");
                        itemBO.addItem(item,function (result){
                        if(result){
                            res.json({result:"success"});
                        }else{
                            res.send({result:"failed"});
                        }
                    });
                    break;
                    case "delete":
                        res.send("delete");
                        break;
                    case "update":
                        res.send("update");
                        break;
                    case "search":
                        res.send("search");
                        break;
                        default :
                            res.send("default");
                            break;
                    }
                    break;
                default :
                    res.send("defualt");
                    break;
                
            }
            
    
});




module.exports=routingHadler;

