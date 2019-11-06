function SumarUno(numero){

    var promesa = new Promise ( function(resolve,reject){
        
        if(numero >=8){
            reject("El numero es muy alto");
            return;
        }
        console.log(numero);
        setTimeout( function() {
            resolve(numero +2 );
        },800);
    });


    return promesa;
    
}

SumarUno(5)
       .then(SumarUno)
       .then(SumarUno)
       .then(SumarUno)
       .then(SumarUno)
       .then(nuevoNumero => {
            console.log(nuevoNumero);
        })
        .catch(error => {
            console.log("Error en promesa");
            console.log(error);
        })



