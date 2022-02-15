/*document.getElementById('sixteenGB').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 200;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
})*/

function updatePrice(itemCost, price) {
    const memoryCost = document.getElementById(itemCost);
    memoryCost.innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}
function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener('click', function () {
        updatePrice(updateId, price);
        document.getElementById(clickId).style.backgroundColor = 'cornflowerblue';
    });

}
onClick('sixteenGB', 'memory-cost', 200);
onClick('eightGB', 'memory-cost', 0);
onClick('ssd1', 'storage-cost', 0);
onClick('ssd2', 'storage-cost', 250);
onClick('ssd3', 'storage-cost', 500);
onClick('free-delivery', 'delivery-cost', 0);
onClick('paid-delivery', 'delivery-cost', 20);

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const code = document.getElementById('promo-input');
    const codeCheck = document.getElementById('promo-input').value;
    const successCode = document.getElementById('applied-text');
    const failCode = document.getElementById('not-applied-text');
    if (codeCheck === fakeCode) {
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice * 20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
        successCode.style.display = 'block';
        failCode.style.display = 'none';
    }
    else {
        failCode.style.display = 'block';
        successCode.style.display = 'none';  
    }
     // clear input 
     code.value = '';
})


