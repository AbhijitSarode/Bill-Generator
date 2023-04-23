let globalTip;

function calculate(tip = 0) {
    let subTotal = Number(document.getElementById('subtotal').value)
    let peopleCount = Number(document.getElementById('people').value)

	if(tip != 0) {
		globalTip = tip
	}
    
   	let totalTip = subTotal * (globalTip / 100)
	let tipAmountPerPerson = totalTip / peopleCount
    let bill = (subTotal + totalTip) / peopleCount

    
	console.log(subTotal, peopleCount, totalTip, bill);

    document.getElementById('tip-per-person').innerText = `₹ ${tipAmountPerPerson.toFixed(2)}`
	document.getElementById('total-per-person').innerText = `₹ ${bill.toFixed(2)}`
}


const reset = () => {
	document.getElementById('subtotal').value = ''
	document.getElementById('people').value = '1'
	document.getElementById('tip-per-person').innerText = `₹ 0.00`
	document.getElementById('total-per-person').innerText = `₹ 0.00`
	globalTipPercent = 0
}