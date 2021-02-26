
export const adsView = (advertisement) => {
    return `<div class="card">
    <div class="card-content">
    <div class="media">

    <div class="media-content">
    <p class="title is-4">${advertisement.name}</p>
    <i class="subtitle is-6">${advertisement.author}</i>
    </div>
    </div>
    
    <div class="content">
    <p class="price">${advertisement.price} €</p>
    <p class="sale">${advertisement.sale}</p>
    </div>
    </div>
    <br>
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    </div>`;
}

export const errorView = (errorMessage) => {
    return `<article class="message is-danger">
      <div class="message-header">
        <p>Error</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        ${errorMessage}
      </div>
    </article>`
  }
  
