

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => {
       /* setTimeout(() => {
            reg.sync.register('Posteo-gatitos');
            console.log('Se enviaron las fotos de gatos');
        }, 3000);*/

        Notification.requestPermission().then( result => {
            console.log(result);
            reg.showNotification('Hola Mundo!');
        });

    });

   
}



/*fetch('https://reqres.in/api/users')
.then(respuesta => respuesta.text())
.then( console.log);*/