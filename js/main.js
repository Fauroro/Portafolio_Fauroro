document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleSidebar = document.querySelector('nav .toggle-sidebar');

    // Función para alternar el estado del sidebar
    function toggleSidebarVisibility() {
        sidebar.classList.toggle('show');
    }

    // Abre o cierra el sidebar al hacer clic en el botón
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', function () {
            toggleSidebarVisibility();
        });
    }

    // Cierra el sidebar si se hace clic fuera de él
    document.addEventListener('click', function (event) {
        // Si el clic fue fuera del sidebar y el sidebar está abierto
        if (sidebar.classList.contains('show') && !sidebar.contains(event.target) && !toggleSidebar.contains(event.target)) {
            toggleSidebarVisibility();
        }
    });
});
