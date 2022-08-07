document.getElementById("btn").addEventListener("click", async () => {
    const info = await getData(search.value);
    console.log(info);
    info.forEach((book) => createCard(book));
});

const getData = async (searchValue) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=30`,
    );
    const data = await response.json();

    let books = data.items.map((book) => {
        return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo?.authors
                ? book.volumeInfo?.authors.join(",")
                : "authors unavaiable",
            description:
                book.volumeInfo.description || "description unavaiable",
            image: book.volumeInfo?.imageLinks
                ? book.volumeInfo?.imageLinks.thumbnail
                : "src/img/Unavailable.png",
        };
    });

    return books;
};

const createCard = (book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = book.title;

    const authors = document.createElement("p");
    authors.classList.add("authors");
    authors.innerText = book.authors;

    const description = document.createElement("p");
    description.classList.add("description");
    description.innerText = book.description;

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = book.image;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(authors);
    card.appendChild(description);

    document.getElementById("cardContainer").appendChild(card);
};
