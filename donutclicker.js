let autoClickerCount = 0;


let clicks = 0;
function purchaseAutoClick() {
    if (clicks >= 100) {
        clicks = clicks - 100;
        counter.innerHTML = clicks;
        autoClickerCount++;
        setInterval(() => {
            clicks = autoClickerCount + clicks;
            counter.innerHTML = clicks;
        }, 1000);
    }
}
function increment() {
    clicks = clicks + 1;
    counter.innerHTML = clicks;
}
function reset() {
    clicks = 0;
    autoClickerCount = 0;
    counter.innerHTML = clicks;
}
