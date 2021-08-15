
const depositInputAmount = document.querySelector('#deposit-input-value');
const depositAmount = document.querySelector('#deposit-amount');
const depositBtn = document.querySelector('#deposit-btn');

const balance = document.querySelector('#balance');

const withdrawBtn = document.querySelector('#withdraw-button');
const withdrawInputAmount = document.querySelector('#withdraw-input-amount');
const withdrawAmount = document.querySelector('#withdraw-amount');

// handle deposit and add amount in balance
depositBtn.addEventListener('click', function (e) {

    e.preventDefault();
    handleAddDeposit(depositInputAmount, depositAmount);
    handleAddDepositBalance(depositInputAmount, balance);

    // clear input field
    depositInputAmount.value = '';
});

// handle withdraw and subtraction in balance

withdrawBtn.addEventListener('click', function (e) {
    e.preventDefault();
    handleWithdraw(withdrawInputAmount, withdrawAmount);
    handleSubtractionBalance(withdrawInputAmount, balance)

    // clear withdraw input field
    withdrawInputAmount.value = '';
})





const handleAddDeposit = function(depositInputAmount, depositAmount) {
    const totalDeposit = convertNumberFunction(depositInputAmount, depositAmount);
    return totalDeposit;
}



const handleAddDepositBalance = function (newDeposit, balance) {

    const totalBalance = convertNumberFunction(newDeposit, balance)
    return totalBalance;
}


const handleWithdraw = function (withdrawValue, withdraw) {

    const totalWithdraw = convertNumberFunction(withdrawValue, withdraw)
    return totalWithdraw;

    
}


const handleSubtractionBalance = function (withdrawValue, balance) {
        let additionSubtracion = true;
        const totalBalance = convertNumberFunction(withdrawValue, balance, additionSubtracion)
        return totalBalance;
}



// convert number function 

const convertNumberFunction = function (inputAmount, amount, value) {
    let newAmount = parseInt(inputAmount.value);
    let currentAmount = parseInt(amount.innerText);
    let totalAmount = 0;
    if(value){
       totalAmount =  currentAmount - newAmount
    } else{
        totalAmount =  currentAmount + newAmount
    }
    amount.innerText = totalAmount;
    return totalAmount; 
}