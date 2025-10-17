console.log("functional");

const blue_button = document.querySelector(".blue_button");
const red_button = document.querySelector(".red_button")
const hidden = document.querySelector(".hide");
const box = document.querySelector(".box");

let pick = "";

blue_button.addEventListener("click", function() {
    pick = "blue";
    console.log("blue selected")
}
);

red_button.addEventListener("click", function() {
    pick = "red";
    console.log("red selected")
}
);

function color(element) {
    console.log("Toggling blue class on:", element);
    element.classList.toggle(pick);
    console.log("Element classes after toggle:", element.classList);

    if (box.classList.contains("red")) {
    hidden.classList.remove("hide");
    }
    if (box.classList.contains("blue")) {
    hidden.classList.add("hide")
    }
}


box.addEventListener("click", () => color(box));