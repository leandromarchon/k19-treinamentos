var contador;
var resto;

for(contador = 0; contador <= 100; contador++){
    resto = contador % 4;
    
    if(resto == 0){
        console.log("PIN");
    }else{
        console.log(contador);
    }
}