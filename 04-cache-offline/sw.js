

//const CACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME    = 'static-v2';
const CACHE_DYNAMIC_NAME   = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';


function limpiarCache( cacheName, numeroItems) {
    caches.open(cacheName)
        .then(cache => {
            return cache.keys()
            .then(keys => {
                if(keys.length > numeroItems){
                 cache.delete( keys[0])
                    .then(limpiarCache(cacheName,numeroItems));   
                }
            });
        });

}


self.addEventListener('install',e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME)
    .then (cache => {
        
       return  cache.addAll([
           '/',
            '/index.html',
            '/css/style.css',
            '/img/main.jpg',
            '/js/app.js'
        ]);

        

    });

    const cacheInm = caches.open(CACHE_INMUTABLE_NAME)
    .then(cache_inm => {
        return cache_inm.addAll([
            'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
        ]);
    });


    e.waitUntil(Promise.all([
        cacheProm,
        cacheInm
    ]));
});


self.addEventListener('fetch', e => {

    //1- Cache only Cuando queremos que la peticion solo sea al cache

    //e.respondWith( caches.match(e.request) ); 
    
    // 2 Cache with network fallback. Si no funciona el cache intenta internet

   /*const respuestaCache = caches.match(e.request)
        .then( res => {
            if(res) return res;

            //No existe el archivo en cache y hay 
            //que buscarlo en la web

            return fetch( e.request)
            .then( newResponse => {
                caches.open(CACHE_DYNAMIC_NAME)
                    .then(cache => {
                        cache.put(e.request,newResponse);
                        limpiarCache(CACHE_DYNAMIC_NAME,5);
                    });
                return newResponse.clone();
            });
        });
    
        e.respondWith(respuestaCache);*/

        // 3 network with cache fallback
      /* const respuestaNet = fetch( e.request ).then(res => {
            console.log('Fetch',res);
            caches.open(CACHE_DYNAMIC_NAME)
                .then(cache => {
                    cache.put(e.request,res);
                    limpiarCache(CACHE_DYNAMIC_NAME,50);
                });
            return res.clone();
        }). catch(error => {
            return caches.match(e.request);
        });


        e.respondWith( respuestaNet );*/

        //4- Cache with network update 
        //SE USA CUANDO EL RENDIMIENTO ES CRITICO
        //Siempre estaran un paso atras

       const  respuesta = caches.open( CACHE_STATIC_NAME ).then(cache => {
            fetch(e.request).then( newR => {
                cache.put(e.reques,newR);

                return cache.match(e.request);
            });
        });

        e.respondWith( respuesta);


});