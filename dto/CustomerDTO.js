/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function CustomerDTO(id,name,address,salary){
    var _id=id;
    var _name=name;
    var _address=address;
    var _salary=salary;
    
    
    this.getId=function (){
        return _id;
    };
    this.getName=function (){
        return _name;
    };
    this.getAddress=function (){
        return _address;
    };
    this.getSalary=function (){
        return _salary;
    };
    
    this.setId=function (){
        _id=id;
    };
    this.setName=function (){
        _name=name;
    };
    this.setAddress=function (){
        _address=address;
    };
    this.setSalary=function (){
        _salary=salary;
    };
    
    this.toJson=function (){
        return {
            id:_id,
            name:_name,
            address:_address,
            salary:_salary
        };
    };
}

module.exports=CustomerDTO;