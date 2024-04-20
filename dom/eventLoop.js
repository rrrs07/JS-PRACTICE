console.log('Event Loop');

setTimeout (function(){
    console.log('Inside settimeout');
}, 5000);

console.log('End of script');