class Componente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="col-12 col-md-4 col-lg-3 mb-5">
                <a class="product-item" href="Ver_mais.html">
                    <img src="images/notebook.png" class="img-fluid product-thumbnail">
                    <h3 class="product-title">Notebook Dell</h3>
                    <strong class="product-price">$200.00</strong>
                    <span class="icon-cross">
                        <img src="images/cross.svg" class="img-fluid">
                    </span>
                </a>
            </div>`;
    }
}

customElements.define("componente-novo", Componente);
