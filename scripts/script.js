const fetchName = () => fetch('https://thatsthespir.it/api');
const randombtn = document.querySelector('button');
const quote = document.querySelector('q');
const img = document.querySelector('img');
const author = document.querySelector('p');


async function fetchDisplayName() {
    try {
        const response = await fetchName();
        const json = await response.json();
        quote.textContent = json.quote;
        img.src = json.photo; // || 
        img.title = json.author;
        // console.log(img.title); la console appelle bien le nom de l'auteur
        author.textContent = json.author;
    } catch (error) {
        alert('Error :', error);
    }
}
fetchDisplayName()

randombtn.addEventListener('click', async () => {
    quote.textContent = '';
    img.src = '';
    img.title = '';
    author.textContent = '';

    try {
        const response = await fetchName();
        const json = await response.json();
        quote.textContent = json.quote;
        img.src = json.photo;
        img.title = json.author;
        author.textContent = json.author;
    } catch (error) {
        alert('Error :', error);

    }
});
