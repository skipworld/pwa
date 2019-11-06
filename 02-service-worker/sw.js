self.addEventListener('fetch', event => {

    /*if(event.request.url.includes('style.css')){
        event.respondWith( null ); 
    }else{

   event.respondWith( fetch(event.request) );
    }*/

    if(event.request.url.includes('style.css')){
        let respuesta = new Response(`
            body {
                background-color: red !important;
                color: pink;
            }
            
        `, {
            headers: {
                'Content-Type' : 'text/css'
            }
        });
        event.respondWith(respuesta);
       
    }
})