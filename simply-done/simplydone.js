console.log("JS is connected!");

const add = document.querySelector(".add");
const list = document.querySelector(".list");
const remove = document.querySelector(".remove");
const clear = document.querySelector(".clear");

let items = [];

function addItem() {
    const form = document.createElement("form");
    form.classList.add("item");

    form.innerHTML = `
        <label>
            <img src="circle.jpg" class="circle" alt="empty circle">
        </label>
        <input type="text" class="input" placeholder="New task" required>
        <label class="center">DATE:</label>
        <input type="date" class="date">
    `;

    form.addEventListener("submit", submitItem);
    list.appendChild(form);
}

function submitItem(e) {
    e.preventDefault();

    const form = e.target;
    const text = form.querySelector(".input").value;
    const date = form.querySelector(".date").value;

    if (!text) return;

    const itemObj = {
        text: text,
        date: date
    };

    items.push(itemObj);
    renderItems();
}

function renderItems() {
    list.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");

        div.innerHTML = `
            <img src="circle.jpg" class="circle" alt="empty circle">
            <span class="input">${item.text}</span>
            <span class="center date">${item.date || ""}</span>
        `;

        list.appendChild(div);
    });
}

function removeItem() {
    if (items.length === 0) return;
    items.pop();
    renderItems();
}

function clearItems() {
    items = [];
    renderItems();
}

add.addEventListener("click", addItem);
remove.addEventListener("click", removeItem);
clear.addEventListener("click", clearItems);