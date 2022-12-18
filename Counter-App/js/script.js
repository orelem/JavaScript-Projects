let countEl = document.getElementById("count-el")
let countScript = document.getElementById("count-script")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function reduce() {
    count -= 1
    countEl.textContent = count
}

function reset() {
    count = 0
    countEl.textContent = count
    console.clear()
}

function save() {
    countScript.textContent += count + " - "
    console.log(count)
}

function clearCount() {
    count = 0
    countEl.textContent = count
    countScript.textContent = "Previous count: "
    console.clear()
}