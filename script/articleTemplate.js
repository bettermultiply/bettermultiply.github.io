class articleTemplate extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute(this.title)
        this.innerHTML = `
            <div class="container">
                <div class="article-container">
                    <h1 id="article-title">BM2023</h1>
                    <br></br>
                    ${this.innerHTML}
                </div>
            </div>
        `;
    }
}

customElements.define("bm-article", articleTemplate)