// change value

function updateValue(id, value) {

    const costElement = document.getElementById(id);
    costElement.innerText = value;
    calc();

}

// calculation total

function calc() {
   const mainPrice = document.getElementById('main-price').innerText;
   const memoryCost = document.getElementById('memory-cost').innerText;
   const storageCost = document.getElementById('storage-cost').innerText;
   const deliveryCost = document.getElementById('delivery-cost').innerText;
   const totalCost = parseInt(mainPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
   document.getElementById('total-cost').innerText = totalCost;
   document.getElementById('total-final').innerText = totalCost;
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

// coupon code calc

document.getElementById('promo-btn').addEventListener('click', function () {
   const promoInput = document.getElementById('promo-code');
   if (promoInput.value == "stevekaku") {
      const totalValue = document.getElementById('total-final');
      const promoDiscount = totalValue.innerText*20/100;
      console.log(promoDiscount);
      totalValue.innerText = totalValue.innerText - promoDiscount;
   }
   document.getElementById('promo-btn').disabled = true;
   promoInput.value = '';
});