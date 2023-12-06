let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let sumEl = document.getElementById("sum-el")
let count = 0
let counts = [];

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    counts.push(count);
    
    let sum = counts.reduce((accumulator, current) => accumulator + current, 0);
    
    sumEl.textContent = "Sum: " + sum;
    countEl.textContent = 0
    count = 0
}
