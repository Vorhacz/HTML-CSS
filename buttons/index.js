var btn = document.getElementById("btn");

btn.addEventListener("click", function onClick() {
    document.getElementById("btn").className = "subscribed";
    document.getElementById("btn").textContent = "Subskrybujesz";
    document.getElementById("btn").id = "btn2";
});

var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function onClick() {
    document.getElementById("btn2").className = "subscribe";
    document.getElementById("btn2").textContent = "Subskrybuj";
    document.getElementById("btn").id = "btn";
});