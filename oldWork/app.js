import { DonutMaker } from "./donut-maker.js";
const newDonutMaker = new DonutMaker();


const donutCount = document.querySelector(".player-stats__donut-count");
const autoClickerCount = document.querySelector(".player-stats__auto-clicker-count");
const autoClickerCost = document.querySelector(".player-stats__auto-clicker-cost");
const donutMultiplierCount = document.querySelector(".player-stats__multiplier-count");
const donutMultiplierCost = document.querySelector(".player-stats__multiplier-cost");
const donutMultiplier = document.querySelector(".player-stats__current-multiplier");
const clickerButton = document.querySelector(".buttons__clicker-button");
const buyAutoClickerButton = document.querySelector(".buttons__buy-auto-clicker");
const buyDonutMultiplierButton = document.querySelector(".buttons__buy-multiplier");
const resetButton = document.querySelector(".buttons__reset");

const updatePlayerStats = function () {
    donutCount.innerText = 'Donut Count: ' + newDonutMaker.donutCount.toFixed();
    autoClickerCount.innerText = 'Auto Clicker Count: ' + newDonutMaker.autoClickerCount;
    autoClickerCost.innerText = 'Auto Clicker Cost: ' + newDonutMaker.currentAutoClickerPrice.toFixed(2);
    donutMultiplierCount.innerText = 'Donut Multiplier Count: ' + newDonutMaker.donutMultiplierCount;
    donutMultiplierCost.innerText = 'Donut Multiplier Cost: ' + newDonutMaker.currentDonutMultiplierPrice.toFixed(2);
    // clickerButton.innerText = 'Make Donut';
    donutMultiplier.innerText = 'Current Multiplier: ' + newDonutMaker.clickValueMultiplier.toFixed(2);
    buyAutoClickerButton.innerText = 'Buy Auto Clicker: ' + newDonutMaker.currentAutoClickerPrice.toFixed();
    buyDonutMultiplierButton.innerText = 'Buy Donut Multiplier: ' + newDonutMaker.currentDonutMultiplierPrice.toFixed();
}

updatePlayerStats();
//make donuts
clickerButton.addEventListener("click", () => {
    newDonutMaker.recordClick();
    updatePlayerStats();
    donut.log(newDonutMaker);
})

buyAutoClickerButton.addEventListener("click", () => {
    if (newDonutMaker.donutCount >= newDonutMaker.currentAutoClickerPrice) {
        newDonutMaker.buyAutoClicker();
        updatePlayerStats();
        donut.log(newDonutMaker);
    }
})

buyDonutMultiplierButton.addEventListener("click", () => {
    if (newDonutMaker.donutCount >= newDonutMaker.currentDonutMultiplierPrice) {
        newDonutMaker.buyDonutMultiplier();
        updatePlayerStats();
        donut.log(newDonutMaker);
    }
})

setInterval(() => {
    newDonutMaker.activateAutoClickers();
    updatePlayerStats();
}, 1000);

setInterval(() => {
    if (newDonutMaker.donutCount >= newDonutMaker.currentAutoClickerPrice) {
        buyAutoClickerButton.classList.remove("hidden");
    }
    else {
        buyAutoClickerButton.classList.add("hidden");
    }
    if (newDonutMaker.donutCount >= newDonutMaker.currentDonutMultiplierPrice) {
        buyDonutMultiplierButton.classList.remove("hidden");
    }
    else {
        buyDonutMultiplierButton.classList.add("hidden");
    }
}, 10);

resetButton.addEventListener("click", () => {
    newDonutMaker.reset();
})