const categories = document.querySelector("#categories");
const itemEl = categories.querySelectorAll(".item");

console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach(item => {
    const titleEl = item.querySelector('h2');
    console.log('Category:', titleEl.textContent);
    const listItem = item.querySelectorAll('ul > li');
    console.log('Elements:', listItem.length);
});


