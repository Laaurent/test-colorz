let quoteIndex = 1;
showQuotes(quoteIndex);

// Next/previous controls
function plusQuotes(n) {
   showQuotes((quoteIndex += n));
}

// Thumbnail image controls
function currentQuote(n) {
   showQuotes((quoteIndex = n));
}

function showQuotes(n, type) {
   let i;
   let quotes = document.getElementsByClassName("avis__item");
   let dots = document.getElementsByClassName("dot_quote");
   if (n > quotes.length) {
      quoteIndex = 1;
   }
   if (n < 1) {
      quoteIndex = quotes.length;
   }
   for (i = 0; i < quotes.length; i++) {
      quotes[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
   }
   quotes[quoteIndex - 1].style.display = "block";
   dots[quoteIndex - 1].className += " active";
}
