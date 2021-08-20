function updateValue(id, value) {

    var costElement = document.getElementById(id);
    costElement.innerText = value;

}

document.getElementById('memory-8gb').addEventListener('click', function () {
   updateValue('memory-cost', 0); 
});

document.getElementById('memory-16gb').addEventListener('click', function () {
   updateValue('memory-cost', 180); 
});

document.getElementById('storage-256gb').addEventListener('click', function () {
   updateValue('storage-cost', 0); 
});

document.getElementById('storage-512gb').addEventListener('click', function () {
   updateValue('storage-cost', 100); 
});

document.getElementById('storage-1tb').addEventListener('click', function () {
   updateValue('storage-cost', 180); 
});

document.getElementById('delivery-free').addEventListener('click', function () {
   updateValue('delivery-cost', 0); 
});

document.getElementById('delivery-paid').addEventListener('click', function () {
   updateValue('delivery-cost', 20); 
});