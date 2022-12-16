let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function reduce() {
    count -= 1
    countEl.innerText = count
}

function reset() {
    count = 0
    countEl.innerText = count
    console.clear()
}

function save() {
    console.log(count)
}