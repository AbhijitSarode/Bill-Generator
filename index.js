function calculate(tip = 0) {
    let subTotal = Number(document.getElementById('subtotal').value)
    let peopleCount = Number(document.getElementById('people').value)
    
    let totalTip = subTotal * (tip / 100)
    
    console.log(subTotal, peopleCount, totalTip);

    bill = subTotal / peopleCount
}