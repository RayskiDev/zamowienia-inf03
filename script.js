const numberAll = document.querySelectorAll('.count');
const buttonsUpdate = document.querySelectorAll('button.update');
const buttonsOrder = document.querySelectorAll('button.order');

function checkNumber() {
    numberAll.forEach(e => {
        if (Number(e.innerHTML) === 0) e.style.backgroundColor = 'red';
        else if (Number(e.innerHTML) >= 1 && Number(e.innerHTML) <= 5) e.style.backgroundColor = 'yellow';
        else e.style.backgroundColor = 'honeydew';
    });
}

buttonsUpdate.forEach((button, index) => {
    button.addEventListener('click', () => {
        let newNum = prompt('Podaj nową ilość:');
        numberAll[index].innerHTML = newNum;
        checkNumber();
    });
});

let orderID = 0;
const nameAll = document.querySelectorAll('.name');
buttonsOrder.forEach((button, index) => {
    button.addEventListener('click', () => {
        orderID++;
        alert(`Zamówienie nr: ${orderID} Produkt: ${nameAll[index].innerHTML}`);
    });
});

checkNumber();