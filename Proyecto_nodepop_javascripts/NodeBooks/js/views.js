export const adsView = (advertisement) => {
    return `<div class="post">
    <strong class="name">${advertisement.name}</strong>
    <i class="author">${advertisement.author}</i>
    <p class="price">${advertisement.price}</p>
    <p class="sale">${advertisement.sale}</p>
</div>`;
}
