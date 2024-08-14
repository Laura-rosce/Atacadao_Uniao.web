class Componente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div style ="margin: 20px; width: 70%;">
            <div class="row"> 
            <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a class="product-item" href="Ver_mais.html">
                    <img src="${this.getAttribute("src")}" class="img-fluid product-thumbnail">
                    <h3 class="product-title">${this.getAttribute("title")}</h3>
                    <strong class="product-price">${this.getAttribute("description")}</strong>
                    <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid">
                    </span>
                </a>
            `;
    }
}

customElements.define("componente-novo", Componente);