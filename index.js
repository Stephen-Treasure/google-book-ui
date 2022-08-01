const getData = async (searchValue) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=5`,
    );
    const data = await response.json();
    // console.log(data.items);

    // const { volumeInfo } = data.items;
    // console.log(volumeInfo.title);

    // data.items.map((e) => {
    //     return {
    //         title: e.volumeInfo.title,
    //     };
    // });

    return data.items.map((e) => {
        return {
            image: e.volumeInfo.imageLinks.thumbnail || "image unavaiable",
            title: e.volumeInfo.title,
            authors: e.volumeInfo.authors.join(",") || "authors unavaiable",
            description: e.volumeInfo.description,
        };
    });
    // return data.items.forEach((key) => {
    //     key.volumeInfo.title;
    // });
};

document.getElementById("btn").addEventListener("click", async () => {
    const inf = await getData(search.value);
    console.log(inf);

    // const title = document.createElement("h2");
    // title.classList.add("title");
    // title.innerText = getData().title;

    // document.getElementById("title").value = getData(search.value).title;
});

// const card = document.createElement('div').classList('card');
// card.appendChild(document.createElement('h2').add('title'));

const title = document.createElement("h3");
title.classList.add("title");
title.innerHTML = getData().title;

const authors = document.createElement("p");
authors.classList.add("authors");

const description = document.createElement("p");
description.classList.add("description");
