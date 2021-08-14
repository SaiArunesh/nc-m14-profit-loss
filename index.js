let buyPrice = document.querySelector("#buy-price");
let stockQuantity = document.querySelector("#stock-quantity");
let currentPrice = document.querySelector("#current-price");
let submitBtn = document.querySelector("#submit-button");
let output = document.querySelector(".output");
let root = document.querySelector(":root");


function calculateProfitOrLoss() {
    let initial = buyPrice.value;
    let current = currentPrice.value;
    let quantity = stockQuantity.value;
    root.style.setProperty('--primary-colour', 'black');

    if (initial === "" || current === "" || quantity === "" || initial <= 0 || current <= 0 || quantity <= 0) {
        output.innerText = "Invalid Value";
        output.classList.add("error");
    }
    else {
        initial = Number(initial);
        current = Number(current);
        quantity = Number(quantity);
        output.classList.remove("error");

        if (current > initial) {
            let profitValue = (current - initial) * quantity;
            let profitPercentage = (profitValue / initial) * 100
            output.innerText = `Profit ! Amount : $ ${profitValue} \n Percentage: ${profitPercentage} %`;
            root.style.setProperty('--primary-colour', 'green');
            output.style.backgroundImage = "url('https://media0.giphy.com/media/3JZ8otG63Sk3irJ90K/giphy.gif')"
            output.style.width = "450px";
            output.style.height = "220px";

        }
        else if (initial > current) {
            let lossValue = (initial - current) * quantity;
            let lossPercentage = (lossValue / initial) * 100
            output.innerText = `Loss ! Amount : $ ${lossValue} \n Percentage: ${lossPercentage} %`;
            output.style.backgroundImage = "url('https://i.gifer.com/XZ9.gif')"
            output.style.width = "460px";
            output.style.height = "250px";
            root.style.setProperty('--primary-colour', 'red');
        }
        else {
            output.innerText = "No Loss/Gain";
        }
    }

    output.style.display = "block";

}

submitBtn.addEventListener("click", calculateProfitOrLoss);
