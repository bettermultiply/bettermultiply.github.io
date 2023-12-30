class navigator extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
            <div class="navigator">
                <a href="/">
                    <div class="home">
                        <img alt="Home" src="../images/aiqfome.svg" width="40px" />
                    </div>
                </a>
                <div id="blo"> </div>
                <div class="jump">
                    <a href="/" class="find">
                        <div>About</div>
                    </a>
                    <a href="/" class="find">
                        <div>Posts</div>
                    </a>
                    <a href="/" class="find">
                        <div>Links</div>
                    </a>
                </div>
                <div class="find-me">
                    <a href="https://github.com/bettermultiply">
                        <img src="../images/github.png" class="icon" />
                    </a>
                    &nbsp;
                    <a>
                        <img src="../images/twitter.png" class="icon" />
                    </a>
                    &nbsp;
                    <a>
                        <img src="../images/linkedin.png" class="icon" />
                    </a>
                </div>
            </div>
        `
    }
}

customElements.define('bm-navigator', navigator)