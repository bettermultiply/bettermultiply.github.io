class titleTemplate extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const articleTitle = this.getAttribute('title');
        const articleHref = this.getAttribute('href');
        const viewContent = this.innerHTML;

        this.innerHTML = 
        `
            <div class="article">
                <a href="${articleHref}">
                    <h1>
                    ${articleTitle}
                    </h1>
                </a>
                <br/>
                <div class="view">'
                    ${viewContent}
                </div>
            </div>
            <hr/>
        `;
    }
}

customElements.define("bm-title", titleTemplate)