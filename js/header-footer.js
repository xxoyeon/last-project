const header = document.querySelector("#header");

fetch("html/header.html")
    .then((res) => res.text())
    .then((data) => (header.innerHTML = data));


const footer = document.querySelector("#footer");

fetch("html/footer.html")
    .then((res) => res.text())
    .then((data) => (footer.innerHTML = data));

