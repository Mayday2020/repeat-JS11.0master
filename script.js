'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money, 
    income = 'Фриланс', 
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
    'Mobile, Связь, Коммуналка'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 300000, 
    period = 12;

let start = function() {
    
    do {
        money = prompt("Ваш месячный доход?", 30000);
    }
    while (!isNumber(money));
};
start();

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

let expenses = [];
    
let getExpensesMonth = function(){
    let sum = 0,
        sum1 = 0;

    for (let i = 0; i < 2; i++){
        
        expenses[i] = prompt('Введите обязательную статью расходов?', 'credit');

        do {
            sum1 = +prompt('Во сколько это обойдется?');
        }
        while(!isNumber(sum1) || sum1 === '' || sum1 === null || !sum1);
        sum += sum1;
    }
    console.log(expenses);
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц ' + expensesAmount);


let getAccumulatedMonth = function(){
    return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    let result = Math.round(mission / accumulatedMonth);
    if (result > 0){
        console.log('Цель будет достигнута за ' + result + ' месяцев.');
    } else {
        console.log('Цель не будет достигнута.');
    }
};
getTargetMonth(); 


let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('budgetDay: ', budgetDay);

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ("У вас высокий уровень дохода");
    } else if (budgetDay >= 600 && budgetDay < 1200){
        return ("У вас средний уровень дохода");
    } else if (budgetDay < 600 && budgetDay > 0) {
        return ("К сожалению у вас уровень дохода ниже среднего");
    } else if (budgetDay <= 0) {
        return ("Что то пошло не так");
    }
};
console.log(getStatusIncome());
