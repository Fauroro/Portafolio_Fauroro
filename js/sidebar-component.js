export class SidebarComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/`
            <ul class="profile">
                <img src="./images/profile.jpg" alt="" class="img-fluid rounded-circle">
                <h1 class="text-light"><a href="#user">Fabian Augusto</a></h1>
                <h1 class="text-light"><a href="#user">Rodriguez Rojas</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="mailto:fabianaugustorr@gmail.com" class="email" target="_blank"><i class="bx bx-envelope"></i></a>
                    <a href="https://github.com/Fauroro" class="github" target="_blank"><i class="bx bxl-github"></i></a>
                    <a href="https://linkedin.com/in/fabianaugustorr" class="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
                </div>
            </ul>
    
            <ul class="side-menu">
                <li>
                    <a href="#user"><i class="bx bxs-home icon side-dropdown"></i> Inicio </a>
                </li>
                <li>
                    <a href="#content"><i class='bx bxs-user-detail icon side-dropdown'></i> Acerca de mi</a>
                </li>
                <li>
                    <a href="#services"><i class='bx bxs-server icon side-dropdown'></i> Servicios </a>
                </li>
                <li>
                    <a href="#portfolio"><i class='bx bxs-book-bookmark icon side-dropdown'></i> Portafolio </a>
                </li>
            </ul>
        `;
    }

}

customElements.define("sidebar-component", SidebarComponent);
{/* <img src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100270.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724803200&semt=ais_hybrid" alt="" class="img-fluid rounded-circle"> */ }
