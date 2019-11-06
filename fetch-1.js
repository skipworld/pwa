//https://reqres.in/api/users
/*fetch('https://reqres.in/api/users')
    .then( resp => resp.json())
    .then( respObj => {
        console.log(respObj.page);
    });*/

    let usuario = {
        nombre :'Eduardo',
        edad   : 25

    };


    fetch('https://reqres.in/api/users',{
        method : 'POST',
        body : JSON.stringify(usuario),
        headers:{
            'Content-Type' : 'application/json'
        }    

    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log("Error de la aplicacion");
        console.log(error);
    });