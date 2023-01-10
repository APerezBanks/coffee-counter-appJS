let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let cancelEl = document.getElementById("cancel-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function cancel() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " " + "☕" + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
