/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
//    add customer
    $("#submitf").click(function (){
        
        var formData=$("#customer_form").serialize();
        $.ajax("http://localhost:5050/customer/add",{
           contentType:"application/x-www-form-urlencoded",
           data:formData,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message").html("Customer has been succuess fully added");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","green");
            }else{
                $("#spn-message").html("Customer hasn't been succuess fully added");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","red");
            }
            $("#txtCustomerId").val("");
            $("#txtCustomerName").val("");
            $("#txtCustomerAddress").val("");
            $("#txtCustomerSalary").val("");
            $("#txtCustomerId").focus();
            $("#spn-message").fadeOut(4000);
            });
        });
//        delete customer
        $("#btndeleteCustomer").click(function (){
        
        var formDataEdit=$("#updateDeleteForm").serialize();
        $.ajax("http://localhost:5050/customer/delete",{
           contentType:"application/x-www-form-urlencoded",
           data:formDataEdit,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message").html("Customer has been succuess fully deleted");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","green");
            }else{
                $("#spn-message").html("Customer hasn't been succuess fully deleted");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","red");
            }
            $("#txtCustomerId").val("");
            $("#txtCustomerName").val("");
            $("#txtCustomerAddress").val("");
            $("#txtCustomerSalary").val("");
            $("#txtCustomerId").focus();
            $("#spn-message").fadeOut(4000);
            });
        });
//        update customer
        $("#btnupdateCustomer").click(function (){
        
        var formDataEdit=$("#updateDeleteForm").serialize();
        $.ajax("http://localhost:5050/customer/update",{
           contentType:"application/x-www-form-urlencoded",
           data:formDataEdit,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message").html("Customer has been succuess fully Updated");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","green");
            }else{
                $("#spn-message").html("Customer hasn't been succuess fully Updated");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","red");
            }
            $("#txtCustomerId").val("");
            $("#txtCustomerName").val("");
            $("#txtCustomerAddress").val("");
            $("#txtCustomerSalary").val("");
            $("#txtCustomerId").focus();
            $("#spn-message").fadeOut(4000);
            });
        });
        
        
        
        //    add item
    $("#submitItem").click(function (){
        
        var formDataItem=$("#item_form").serialize();
        $.ajax("http://localhost:5050/item/add",{
           contentType:"application/x-www-form-urlencoded",
           data:formDataItem,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message-item").html("Item has been succuess fully added");
                $("#spn-message-item").css("display","inline");
                $("#spn-message-item").css("color","green");
            }else{
                $("#spn-message-item").html("Item hasn't been succuess fully added");
                $("#spn-message-item").css("display","inline");
                $("#spn-message-item").css("color","red");
            }
            $("#txtItemCode").val("");
            $("#txtItemDesc").val("");
            $("#txtItemUprice").val("");
            $("#txtItemQOH").val("");
            $("#txtItemCode").focus();
            $("#spn-message-item").fadeOut(4000);
            });
        });
//        delete customer
        $("#btndeleteCustomer").click(function (){
        
        var formDataEdit=$("#updateDeleteForm").serialize();
        $.ajax("http://localhost:5050/item/delete",{
           contentType:"application/x-www-form-urlencoded",
           data:formDataEdit,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message").html("Item has been succuess fully deleted");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","green");
            }else{
                $("#spn-message").html("Item hasn't been succuess fully deleted");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","red");
            }
            $("#txtCustomerId").val("");
            $("#txtCustomerName").val("");
            $("#txtCustomerAddress").val("");
            $("#txtCustomerSalary").val("");
            $("#txtCustomerId").focus();
            $("#spn-message").fadeOut(4000);
            });
        });
//        update customer
        $("#btnupdateCustomer").click(function (){
        
        var formDataEdit=$("#updateDeleteForm").serialize();
        $.ajax("http://localhost:5050/customer/update",{
           contentType:"application/x-www-form-urlencoded",
           data:formDataEdit,
           dataType:"json",
           method:"POST"
        }).done(function(json){
            if(json.result==="success"){
                $("#spn-message").html("Customer has been succuess fully Updated");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","green");
            }else{
                $("#spn-message").html("Customer hasn't been succuess fully Updated");
                $("#spn-message").css("display","inline");
                $("#spn-message").css("color","red");
            }
            $("#txtCustomerId").val("");
            $("#txtCustomerName").val("");
            $("#txtCustomerAddress").val("");
            $("#txtCustomerSalary").val("");
            $("#txtCustomerId").focus();
            $("#spn-message").fadeOut(4000);
            });
        });
    });





