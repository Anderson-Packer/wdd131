console.log("JS is connected!");
 
const add = document.querySelector(".add")
const list = document.querySelector(".list");
const remove = document.querySelector(".remove")
const clear = document.querySelector(".clear")

function addItem() {
        const newItem = document.createElement("div");
    newItem.classList.add("item");

    newItem.innerHTML = `
        <form class="item" onsubmit="return false">
            <label for="item"><img src="circle.jpg" class="circle" alt="empty circle"></label>
            <input type="text" class="input" name="item">
            <label for="date" class="center">DATE:</label>
            <input type="date" class="date" name="date">
       </form>
    `;
    list.appendChild(newItem);
    console.log("item added");
}

add.addEventListener("click", addItem)

 remove.addEventListener("click", () => {
    const lastItem = list.lastElementChild;
    
    lastItem.remove();
    console.log("item removed")
});

clear.addEventListener("click", () => {
    list.innerHTML = "";
});

