// const Load = async (url) => {
//     const response = await fetch(url);
//     console.log("url");

//     return response.json();
// };

const url_api =
    "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyA8bWDWKfJ5UztmwkbAB4XiT8Md30xjV50";

const apiKey = "AIzaSyA8bWDWKfJ5UztmwkbAB4XiT8Md30xjV50";

// let search = document.getElementById("search").value;

const url_api2 =
    "https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyA8bWDWKfJ5UztmwkbAB4XiT8Md30xjV50";

// const url_api3 = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA8bWDWKfJ5UztmwkbAB4XiT8Md30xjV50&maxResults=40`;

// // GET https://books.googleapis.com/books/v1/volumes?q=harry%20potter&key=[YOUR_API_KEY] HTTP/1.1

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};

console.log(getData(url_api2));

// const change = () => {
//     cns;
// };
