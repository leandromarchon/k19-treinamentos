var contador;
var resto;

for(contador = 0; contador <= 100; contador++){
    resto = contador % 2;
    
    if(resto == 1){
        console.log("*");
    }else{
        console.log("**");
    }
}