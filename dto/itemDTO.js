/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function itemDTO(code,description,unitPrice,qtyOnHand){
    var _code=code;
    var _description=description;
    var _unitPrice=unitPrice;
    var _qtyOnHand=qtyOnHand;
    
    
    this.getCode=function (){
        return _code;
    };
    this.getDescription=function (){
        return _description;
    };
    this.getUnitPrice=function (){
        return _unitPrice;
    };
    this.getQtyOnHand=function (){
        return _qtyOnHand;
    };
    
    this.setCode=function (){
        _code=code;
    };
    this.setDescription=function (){
        _description=description;
    };
    this.setUnitPrice=function (){
        _unitPrice=unitPrice;
    };
    this.setQtyOnHand=function (){
        _qtyOnHand=qtyOnHand;
    };
    
    this.toJson=function (){
        return {
            id:_code,
            name:_description,
            address:_unitPrice,
            salary:_qtyOnHand
        };
    };
}

module.exports=itemDTO;

