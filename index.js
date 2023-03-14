
function suma(op1, op2, op3) {
    return(op1 + op2 + op3); 
}
function resta(op1, op2) {
    return(op1 - op2); 
}
function multiplicacion(op1, op2) {
   return(op1 * op2); 
}
function division(op1, op2) {
    if(op2==0){return("No se puede dividir por 0")}else{
        return(op1 / op2); }
}
function cuadrado(op1){
    let potencia = op1*op1;
    return(potencia);
}


module.exports = {suma, resta, multiplicacion, division,cuadrado}