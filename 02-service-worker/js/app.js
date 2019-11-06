/*if('serviceWorker' in navigator){
    console.log("Se puede usar el serviceWorker");
}else{
    console.log("Vamos capo....Instala algo decente por favor! ");
}
*/
if(navigator.serviceWorker) {
  
    navigator.serviceWorker.register('/sw.js');
}else{
    console.log("Vamos capo....Instala algo decente por favor! ");
}