export class NavComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
        <nav class="nav-ppal">
            <span>Fauroro's Portfolio</span>
            <form action="#"></form>
            <i class='bx bx-menu toggle-sidebar'></i>
        </nav>
        `;
    }

}

customElements.define("nav-component", NavComponent);
