// First Class

const plusFirstClass = document.getElementById('plusFirstClass');
plusFirstClass.addEventListener('click', function () {



    const priceFirstClass = document.getElementById('priceFirstClass').value;
    const firstInputNumber = parseInt(priceFirstClass);
    const incrementFirst = firstInputNumber + 150;
    document.getElementById('priceFirstClass').value = incrementFirst;


    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber + 150;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + 150;
    document.getElementById('grandTotal').innerText = grandTotalPrice;



})




const minusFirstClass = document.getElementById('minusFirstClass');
minusFirstClass.addEventListener('click', function () {

    const priceFirstClass = document.getElementById('priceFirstClass').value;
    const priceInputNumber = parseInt(priceFirstClass);
    const decrementPrice = priceInputNumber - 150;
    document.getElementById('priceFirstClass').value = decrementPrice;


    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber - 150;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - 150;
    document.getElementById('grandTotal').innerText = grandTotalPrice;

})



// Economy



const plusEconomy = document.getElementById('plusEconomy');
plusEconomy.addEventListener('click', function () {



    const priceEconomy = document.getElementById('priceEconomy').value;
    const economyInputNumber = parseInt(priceEconomy);
    const incrementEconomy = economyInputNumber + 100;
    document.getElementById('priceEconomy').value = incrementEconomy;


    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber + 100;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber + 100;
    document.getElementById('grandTotal').innerText = grandTotalPrice;



})


const minusEconomy = document.getElementById('minusEconomy');
minusEconomy.addEventListener('click', function () {

    const priceEconomy = document.getElementById('priceEconomy').value;
    const economyInputNumber = parseInt(priceEconomy);
    const decrementEconomy = economyInputNumber - 100;
    document.getElementById('priceEconomy').value = decrementEconomy;


    const subtotal = document.getElementById('subtotal').innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log(subtotalNumber);
    const subtotalPrice = subtotalNumber - 100;
    document.getElementById('subtotal').innerText = subtotalPrice;

    const grandTotal = document.getElementById('grandTotal').innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalPrice = grandTotalNumber - 100;
    document.getElementById('grandTotal').innerText = grandTotalPrice;

})





