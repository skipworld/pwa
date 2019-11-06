//https://reqres.in/api/users
let img1 = document.getElementById('avatar-1');
function ObtenerImagen(url_img,selector){
    fetch(url_img)
    .then(imagen => imagen.blob())
    .then(imagen1 => {
        var img_Path = URL.createObjectURL(imagen1);
        selector.src = img_Path;
    });

}

fetch('no-encontrado.html')
.then(resp => {
    if(resp.ok){
        return resp.text();
    }else{
        throw new Error("Estamos avanzando, pero hay error en la peticion");
    }
})
.then(html => {
    let body = document.getElementById('Contenido');
    body.innerHTML = html;
    fetch('https://reqres.in/api/users/2')
    .then(respuesta => {
        if(respuesta.ok){
            return respuesta.json();
        }else{
            throw new Error("No se encontro el usuario");  
        }
    })
    .then(usuario => {
        let avatar = usuario.data.avatar;
        ObtenerImagen(avatar,img1);

    });
})
.catch(error => {
 console.log("Error en la peticion");
 console.log(error);
});