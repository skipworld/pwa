//https://reqres.in/api/users
let img1 = document.getElementById('avatar-1');
let img2 = document.getElementById('avatar-2');
let cont = document.getElementById('Contenido');
function ObtenerImagen(url_img,selector){
    fetch(url_img)
    .then(imagen => imagen.blob())
    .then(imagen1 => {
        var img_Path = URL.createObjectURL(imagen1);
        selector.src = img_Path;
    });

}


fetch('https://reqres.in/api/users/5')
.then (resp => {

    if(resp.ok){
       return resp.json();
       
    }else{
        throw new Error('Error en la peticion');
    }
    

})
.then(usuario => {
    
    var url_img  = usuario.data.avatar;
    ObtenerImagen(url_img,img1);

})
.catch( error => {
    console.log("Error en la peticion");
    console.log(error);
});