const txtName = document.getElementById('txtName');
const txtDate = document.getElementById('txtDate');
const txtAmount = document.getElementById('txtAmount');
let rowExpenses = document.getElementById('rowExpenses');
const btnAddExpense = document.getElementById('btnExpense');

let expenses = [];

btnAddExpense.addEventListener('click', (event) => {
    event.preventDefault();
    addExpense(txtName.value, txtAmount.value, txtDate.value);
})

function addExpense(name, amount, date) {
    expenses.push({ name: name, amount: amount, date: date });
    populateTable(expenses);
}

function removeExpense(index) {
    expenses.splice(index, 1);
    populateTable(expenses);
}

function populateTable(listExpenses) {
    rowExpenses.innerHTML = '';
    console.log(listExpenses.length);
    if (listExpenses.length == 0) {
        rowExpenses += "<tr> <td colspan='4'> No expanses added yet. </td> </tr>";
    } else {
        listExpenses.forEach((item, index) => {
            rowExpenses.innerHTML += "<tr> <td>" + item.name + "</td> <td>" + item.date + "</td> <td> " + item.amount + "</td> <td> <button class='btn btn-danger text-light' onClick='removeExpense(" + index + ")'>x</button> </td> </tr>";
        });
    }
}