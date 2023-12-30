class articleHead extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const articleTitle = this.getAttribute('title');
        const headContent = this.innerHTML;

        this.innerHTML =`
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>${articleTitle}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
            <link rel="stylesheet" href="../style/style.css" />
            <link rel="stylesheet" href="../style/article-style.css" />
            <link href="https://fonts.cdnfonts.com/css/febrero" rel="stylesheet" />
                
            ${headContent}
        `;
    }
}

customElements.define("bm-article-head", articleHead)