function factorial(n){
    if(n<0)throw new Error('No se aceptan factoriales negativos');
    if(n===0||n===1)return 1;
    return n*factorial(n-1);
}

function fibonacci(n){
    if(n<0)throw new Error('No se aceptan fibonacci negativos');
    if(n===0)return 0;
    if(n===1)return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}

module.exports={factorial,fibonacci};