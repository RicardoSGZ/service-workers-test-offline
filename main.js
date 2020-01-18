if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
    });
} else {
    console.log('ServiceWorker is not allowed in this browser');
}

//In case there is a connection with databases or APIs, it uses LocalStorage to save database entries
$.ajax({
	//... API parameters
  }).done(function(data) { //Code if success
	//... 
	localStorage.setItem(0, JSON.stringify(data));
	//...
  }).fail(function(err) { //Code if connection error
	let off_list = JSON.parse(localStorage.getItem(0));
	//... 
  })