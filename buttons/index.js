function getIsSubscribed() {
    // Połączenie z bazą danych, odczytujemy czy jest zasubsrybowane
    return Math.random() < 0.5 ? false : true;
}

var subscribeButton = $("#subscribeButton");
var isSubscribed = getIsSubscribed();

function updateSubscribeButton(isSubscribed) {
    if(isSubscribed) {
        subscribeButton.removeClass("subscribe");
        subscribeButton.addClass("subscribed");
        subscribeButton.text("Subskrybujesz");
    }
    else {
        subscribeButton.removeClass("subscribed");
        subscribeButton.addClass("subscribe");
        subscribeButton.text("Subskrybuj");
    }
}

subscribeButton.on("click", function onClick() {
    isSubscribed = !isSubscribed;
    updateSubscribeButton(isSubscribed);
});

updateSubscribeButton(isSubscribed);

/*
JQUERY

var subscribeButton = $("#subscribeButton");
var isSubscribed = false;

subscribeButton.on("click", function onClick() {
    isSubscribed = !isSubscribed;
    if(isSubscribed) {
        subscribeButton.removeClass("subscribe");
        subscribeButton.addClass("subscribed");
        subscribeButton.text("Subskrybujesz");
    }
    else {
        subscribeButton.removeClass("subscribed");
        subscribeButton.addClass("subscribe");
        subscribeButton.text("Subskrybuj");
    }
});
*/

/*
var subscribeButton = document.getElementById("subscribeButton");
var isSubscribed = false;

subscribeButton.addEventListener("click", function onClick() {
    isSubscribed = !isSubscribed;
    if(isSubscribed) {
        subscribeButton.className = "subscribed";
        subscribeButton.textContent = "Subskrybujesz";
    }
    else {
        subscribeButton.className = "subscribe";
        subscribeButton.textContent = "Subskrybuj";
    }
});

*/