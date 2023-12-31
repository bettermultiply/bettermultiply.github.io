class articleImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imageSrc = this.getAttribute('src');

        this.innerHTML =`
            <br>
            <div style="display: flex;">
            <img src="${imageSrc}" width="90%" style="margin: auto;">
            </div>
            <br>
        `;
    }
}

customElements.define("bm-article-image", articleImage)