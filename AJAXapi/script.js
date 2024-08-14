// Melakukan Request Dengan Xmlhttprequest
const req = new XMLHttpRequest();
let data;

req.onload = function () {
	data = JSON.parse(this.responseText);
	console.log(data);
};

req.onerror = function () {
	console.log('Error', this);
};

req.open('GET', 'https://swapi.dev/api/people/1', true);
myReq.setRequestHeader('Accept', 'application/json');
req.send();
