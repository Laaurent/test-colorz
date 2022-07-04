var modal = document.getElementById("modal");

var btn = document.getElementById("buy_it");

var btn_close = document.getElementById("modal_close");

btn.onclick = function () {
   modal.style.display = "block";
};

btn_close.onclick = function () {
   modal.style.display = "none";
};

window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
};
