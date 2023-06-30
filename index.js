
const url = "https://type.fit/api/quotes";

const fetchingData = async (url) => {

    const response = await fetch(url);
    const data = await response.json();
    
    const randomIndex = Math.floor(Math.random( )* data.length);
    const author = document.getElementById("author");
    const quote = document.getElementById("quote");
    
    quote.innerHTML = data[randomIndex].text;
    author.innerHTML = "-" + data[randomIndex].author;

    if(data[randomIndex].author === null) {
        author.innerHTML = "-Unknown";
    }

}

const button = document.getElementById("primary-btn");
button.addEventListener("click", () => {
    fetchingData(url);
});