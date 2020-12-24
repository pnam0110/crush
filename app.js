function co() {
    alert("Mình cũng thích cậu ❤");
}

function troll(mi) {
    document.querySelector("#b" + (mi ? "1" : "2")).innerText = "Không";
    document.querySelector("#b" + (mi ? "2" : "1")).innerText = "Có";
}