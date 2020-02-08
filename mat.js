//Creo un objeto constante.
//NOTA:¡¡siempre se iguala a llaves!!, también funciona corchetes
const MATH=[];
function add(x1, x2){
    return x1+x2
}
function substract(x1, x2){
    return x1-x2    
}
function multiply(x1, x2){
    return x1*x2
}
function divide(x1, x2){
    if(x2 == 0){
        var err=" No se divide por Cero ";
        return err;
    }else{
        return x1/x2
    }
}
/*
function sms(name){
    console.log("Hi", name);
}
*/
//===Forma1=========exportar los las funciones a index==================//
/* Esto me sirve para exportar una propiedad de un objeto
*exports.add = add;
*exports.substract = substract;
*exports.multiply = multiply;
*exports.divide = divide;
*/
//===Forma2===========Exporto un objeto==============================//
//Esto me permite exportar objetos, funciones, variables y cualquier dato de JS.
MATH.add = add;
MATH.substract = substract;
MATH.multiply = multiply;
MATH.divide = divide;

module.exports = MATH;
/**
 * No puedes importar 2 cosas(hasta lo que intnté),
 * no pude exportar la const MATH y una funcion que
 * solo tiene un console.log("");
*/
//module.exports = sms;