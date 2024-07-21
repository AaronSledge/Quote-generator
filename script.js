let quoteText = document.getElementById("quote");




function fetchQuote() {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => quoteText.textContent = data.content + "\r\n" + "by " + data.author)
    .catch(error => console.log(error));
}