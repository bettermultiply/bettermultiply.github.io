class articleImage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const imageSrc = this.getAttribute('src');

        this.innerHTML =`
            <br>
            <br>
            <div style="display: flex;">
            <img src="${imageSrc}" width="90%" height="90%" style="margin: auto;">
            </div>
            <br>
            <br>
        `;
    }
}

customElements.define("bm-article-image", articleImage)