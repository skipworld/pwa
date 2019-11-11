
// Ciclo de vida del SW

self.addEventListener('install', event => {
    //descargar archivos necesarios del sitio
    console.log('Instalando SW');
    //self.skipWaiting();
    const instalacion = new Promise( (resolve,reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        },1);
    });

    event.waitUntil(instalacion);
});

self.addEventListener('activate',  event => {
//borrar cache
console.log('Activo y listo');
});

//FETCH: Manejo de peticiones HTTP

self.addEventListener('fetch', event =>{

    //Aplicar estrategias del cache
/*console.log('SW',event.request.url);

    if(event.request.url.includes('https://reqres.in/')){

        const resp = new Response('{ok.false,mensaje:"jajaja"}');
        event.respondWith(resp);
    }*/

});

//SYNC : Es cuando recuperamos la conexion a internet

self.addEventListener('sync', event => {
    //En esta parte leyo el registro en el sync que hice 
    // en app.js y me realizo el posteo de forma exitosa
    // que lindoooooo
console.log('Got internet!');
console.log(event);
console.log(event.tag);

});


//PUSH: maneras las notificaciones PUSH. 

self.addEventListener('push', event => {

 console.log('Notificacion recibida');

});